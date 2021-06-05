import { CronJob } from "cron";
import models, { sequelize } from "../../models";
import nodemailer from "nodemailer";
import moment from "moment";
import config from "../config/settings";
import { sockets } from "../sockets";

const Op = sequelize.Op;

function sendMail(to, text) {
  let transporter = nodemailer.createTransport({
    host: config.email.server,
    port: 587,
    secure: false,
    auth: {
      user: config.email.user,
      pass: config.email.pass
    }
  });
  let mailOptions = {
    to,
    text,
    from: config.email.from,
    subject: "An auction is over."
  };

  return transporter.sendMail(mailOptions);
}

async function processAuctionOwner(listing, Auction) {
  let actionUser = null;
  let link = null;
  let notifyText = `Auction for ${listing.title} is over.\nNobody took part in the auction`;
  if (Auction.User) {
    notifyText = `Auction for ${Auction.Listing.title} is over.\nThe winner is ${Auction.User.first_name} ${Auction.User.last_name} with the price ${Auction.price} USD.\n`;
    actionUser = Auction.User.id;
    link = `/product/${listing.id}/`;
  }
  try {
    const ntf = await models.Notification.create({
      content: notifyText,
      category: "AUCTION_OWNER",
      link,
      actionUser
    });
    const userNtf = await models.UserNotification.create({
      UserId: listing.User.id,
      NotificationId: ntf.id,
      read: false
    });

    const io = sockets.io;
    let avatar = null;
    if (Auction.User.avatar) avatar = Auction.User.avatar;
    let Actor = null;
    if (Auction.User) {
      Actor = {
        avatar,
        first_name: Auction.User.first_name,
        last_name: Auction.User.last_name,
        id: Auction.User.id
      };
    }

    for (let key in io.sockets.sockets) {
      if (io.sockets.sockets.hasOwnProperty(key)) {
        if (listing.User.id == io.sockets.sockets[key].userId) {
          io.sockets.sockets[key].emit("NEW_NOTIFICATION", {
            category: "AUCTION_OWNER",
            content: notifyText,
            link,
            UserNotificationId: userNtf.id,
            createdAt: ntf.createdAt,
            Actor
          });
        }
      }
    }
    await sendMail(listing.User.email, notifyText);
  } catch (e) {
    console.log(e);
  }
}

async function processWinner(Auction) {
  try {
    const text = `Hi ${Auction.User.first_name} ${Auction.User.last_name}.\nAuction for ${Auction.Listing.title} is over.\nYou are winner in auction of ${Auction.Listing.title} with the price ${Auction.price} USD.`;
    const notifyText = `You are winner in auction of ${Auction.Listing.title}`;
    const ntf = await models.Notification.create({
      content: notifyText,
      actionUser: Auction.Listing.User.id,
      category: "AUCTION_WINNER",
      link: `/product/${Auction.Listing.id}/`
    });
    const userNtf = await models.UserNotification.create({
      UserId: Auction.User.id,
      NotificationId: ntf.id,
      read: false
    });

    const io = sockets.io;

    for (let key in io.sockets.sockets) {
      if (io.sockets.sockets.hasOwnProperty(key)) {
        if (Auction.User.id == io.sockets.sockets[key].userId) {
          io.sockets.sockets[key].emit("NEW_NOTIFICATION", {
            category: "AUCTION_WINNER",
            content: notifyText,
            link: `/product/${Auction.Listing.id}/`,
            UserNotificationId: userNtf.id,
            createdAt: ntf.createdAt,
            Actor: {
              avatar: Auction.Listing.User.avatar,
              first_name: Auction.Listing.User.first_name,
              last_name: Auction.Listing.User.last_name,
              id: Auction.Listing.User.id
            }
          });
        }
      }
    }

    await sendMail(Auction.User.email, text);
  } catch (e) {
    console.log(e);
  }
}

async function notifyAboutAuction(Auction, WinAuction) {
  const text = `Hi ${Auction.User.first_name} ${Auction.User.last_name}.\nAuction for ${Auction.Listing.title} is over.\nWinner at auction of the ${Auction.Listing.title} is ${WinAuction.User.first_name} ${WinAuction.User.last_name} with the price ${WinAuction.price} USD.`;
  const notifyText = `Winner at auction of the ${Auction.Listing.title} is ${WinAuction.User.first_name} ${WinAuction.User.last_name}`;
  try {
    const ntf = await models.Notification.create({
      category: "AUCTION_END",
      content: notifyText,
      actionUser: WinAuction.User.id,
      link: `/product/${Auction.Listing.id}/`
    });
    const userNtf = await models.UserNotification.create({
      UserId: Auction.User.id,
      NotificationId: ntf.id,
      read: false
    });

    const io = sockets.io;

    for (let key in io.sockets.sockets) {
      if (io.sockets.sockets.hasOwnProperty(key)) {
        if (Auction.User.id == io.sockets.sockets[key].userId) {
          io.sockets.sockets[key].emit("NEW_NOTIFICATION", {
            category: "AUCTION_END",
            content: notifyText,
            UserNotificationId: userNtf.id,
            createdAt: ntf.createdAt,
            link: `/product/${Auction.Listing.id}/`,
            Actor: {
              avatar: WinAuction.User.avatar,
              first_name: WinAuction.User.first_name,
              last_name: WinAuction.User.last_name,
              id: WinAuction.User.id
            }
          });
        }
      }
    }

    await sendMail(Auction.User.email, text);
  } catch (e) {
    console.log(e);
  }
}

const publishAuction = new CronJob("*/60 * * * * *", async function() {
  const now = moment().toDate();
  const end = moment(now).format("YYYY-MM-DD HH:mm:00");
  const start = moment(now)
    .subtract(1, "minutes")
    .format("YYYY-MM-DD HH:mm:00");
  try {
    const listings = await models.Listing.findAll({
      where: {
        isAuction: true,
        auctionDateTime: {
          [Op.between]: [new Date(start), new Date(end)]
        }
      },
      include: [
        {
          model: models.Auction,
          include: [
            {
              model: models.User
            },
            {
              model: models.Listing,
              include: [{ model: models.User }]
            }
          ]
        },
        {
          model: models.User
        }
      ],
      order: [[models.Auction, "createdAt", "DESC"]]
    });

    for (const listing of listings) {
      let winnerAuction = {},
        sentEmails = [];

      // Send email to Winner
      if (listing.Auctions && listing.Auctions.length > 0) {
        winnerAuction = listing.Auctions[0];
        await processWinner(winnerAuction);
        sentEmails.push(winnerAuction.User.email);
      }
      // Send email to auction owner
      await processAuctionOwner(listing, winnerAuction);
      sentEmails.push(listing.User.email);
      // Send email to bidders
      for (const auction of listing.Auctions) {
        const dups = sentEmails.filter(item => item === auction.User.email);
        if (dups.length === 0) {
          await notifyAboutAuction(auction, winnerAuction);
          sentEmails.push(auction.User.email);
        }
      }
    }
  } catch (e) {
    console.log(e);
  }
});

module.exports = publishAuction;
