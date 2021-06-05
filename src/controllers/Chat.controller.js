import models, { sequelize } from "../../models";
import api from "../tools/common";
import CurrencyService from "../services/Currency";
import { sockets } from "../sockets";
const Op = sequelize.Op;

async function getContactList(req, res, next) {
  try {
    let contacts = await models.Contact.findAll({
      where: {
        [Op.or]: [{ SellerId: req.UserId }, { CustomerId: req.UserId }]
      },
      include: [
        {
          model: models.User,
          attributes: ["id", "first_name", "last_name", "type", "avatar"],
          include: [
            {
              model: models.Company,
              include: [
                {
                  model: models.Country
                }
              ]
            }
          ],
          as: "Seller"
        },
        {
          model: models.User,
          attributes: ["id", "first_name", "last_name", "type", "avatar"],
          include: [
            {
              model: models.Company,
              include: [
                {
                  model: models.Country
                }
              ]
            }
          ],
          as: "Customer"
        },
        {
          model: models.Listing,
          include: [
            {
              model: models.Country,
              attributes: ["name"],
              include: [
                {
                  model: models.Currency,
                  attributes: ["code", "symbol"]
                }
              ]
            },
            {
              model: models.ListingFile,
              order: [["order", "ASC"]]
            }
          ],
          as: "Listing"
        }
      ]
    });
    for (let contact of contacts) {
      let message = await models.Message.findAll({
        where: {
          ListingId: contact.ListingId,
          [Op.or]: {
            [Op.and]: [
              { Sender: contact.SellerId },
              { Recipient: contact.CustomerId }
            ],
            [Op.and]: [
              { Sender: contact.CustomerId },
              { Recipient: contact.SellerId }
            ]
          }
        },
        order: [["createdAt", "DESC"]]
      });

      if (message != null && message.length > 0) message = message[0];
      else message = {};

      let ListingImage = "";
      for (let ListingFile of contact.dataValues.Listing.ListingFiles) {
        if (ListingFile.type == "IMAGE") {
          ListingImage = ListingFile.url;
          break;
        }
      }

      let userFollower = await models.UserFollower.findOne({
        where: {
          UserId: contact.dataValues.SellerId,
          FollowerId: req.UserId
        }
      });
      if (userFollower)
        contact.dataValues.Seller.dataValues = {
          ...contact.dataValues.Seller.dataValues,
          follow: true
        };
      else
        contact.dataValues.Seller.dataValues = {
          ...contact.dataValues.Seller.dataValues,
          follow: false
        };
      contact.dataValues.Message = message;
      contact.dataValues.Listing.dataValues.ListingImage = ListingImage;
      delete contact.dataValues.Listing.dataValues.ListingFiles;
    }
    api.ok(res, contacts);
  } catch (e) {
    api.error(res, e.message, 500);
  }
}

function getMessages(req, res, next) {
  const me = req.UserId;
  const you = req.body.opponentId;
  models.Message.update(
    { isRead: true },
    {
      where: {
        ListingId: req.body.ListingId,
        Sender: you,
        Recipient: me
      }
    }
  )
    .then(() => {
      return models.Message.findAll({
        where: {
          ListingId: req.body.ListingId,
          [Op.or]: [
            {
              [Op.and]: [{ Sender: me }, { Recipient: you }]
            },
            {
              [Op.and]: [{ Sender: you }, { Recipient: me }]
            }
          ]
        },
        order: [["createdAt", "ASC"]]
      });
    })
    .then(async messages => {
      if (messages) {
        api.ok(res, { messages });
      } else {
        api.ok(res, { messages: [] });
      }
    })
    .catch(e => {
      api.error(res, e.message, 500);
    });
}

async function addContact(req, res, next) {
  const { ListingId, SellerId, content, time } = req.body;
  try {
    const extContacts = await models.Contact.findAll({
      where: {
        ListingId,
        SellerId,
        CustomerId: req.UserId
      }
    });
    if (extContacts.length === 0) {
      await models.Contact.build({
        ListingId,
        SellerId,
        CustomerId: req.UserId
      }).save();
    }
    await models.Message.build({
      ListingId,
      Sender: req.UserId,
      Recipient: SellerId,
      content,
      isRead: true,
      time: new Date(time)
    }).save();

    const io = sockets.io;

    for (let key in io.sockets.sockets) {
      if (io.sockets.sockets.hasOwnProperty(key)) {
        if (SellerId == io.sockets.sockets[key].userId) {
          io.sockets.sockets[key].emit("RECEIVE_NEW_MESSAGE", {
            isNewContact: true,
            ListingId,
            Sender: req.UserId,
            Recipient: SellerId,
            content,
            isRead: true,
            time: new Date(time)
          });
        }
      }
    }
    api.ok(res, { message: "Message sent" });
  } catch (err) {
    api.error(res, err.message, 500);
  }
}

function getUnreadMessages(req, res, next) {
  models.Message.findAll({
    where: {
      isRead: false,
      Recipient: req.UserId
    },
    include: [
      {
        model: models.User,
        as: "SenderInfo",
        attributes: ["first_name", "last_name", "avatar"]
      }
    ],
    order: [["createdAt", "DESC"]]
  }).then(messages => {
    api.ok(res, messages);
  });
}

module.exports = {
  getContactList,
  getMessages,
  addContact,
  getUnreadMessages
};
