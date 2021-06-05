import models, { sequelize } from "../../../models";
import { sockets } from "../../sockets";
import UserService from "../User";

async function notifyFollow(Following, Follower) {
  const ntf = await models.Notification.create({
    content: `now is your follower`,
    category: "FOLLOWED",
    link: `/profile/${Follower.id}/`,
    actionUser: Follower.id
  });

  const userNtf = await models.UserNotification.create({
    UserId: Following.id,
    NotificationId: ntf.id,
    read: false
  });

  const io = sockets.io;

  for (let key in io.sockets.sockets) {
    if (io.sockets.sockets.hasOwnProperty(key)) {
      if (Following.id == io.sockets.sockets[key].userId) {

        io.sockets.sockets[key].emit("NEW_NOTIFICATION", {
          category: "FOLLOWED",
          content: "now is your follower",
          link: `/profile/${Follower.id}/`,
          UserNotificationId: userNtf.id,
          createdAt: userNtf.createdAt,
          Actor: {
            avatar: Follower.avatar,
            first_name: Follower.first_name,
            last_name: Follower.last_name,
            id: Follower.id
          }
        });
      }
    }
  }
}

async function notifyNewListing(UserId, ListingId) {
  try {
    let followers = await UserService.getAllFollowers(UserId);
    followers = followers.followers;

    let ntf = null;
    if (followers.length > 0)
      ntf = await models.Notification.create({
        content: `posted new offer`,
        category: "NEW_LISTING",
        link: `/product/${ListingId}/`,
        actionUser: UserId
      });

    let feeds = [],
      isFollower = [],
      followerNtf = [];
    for (let follower of followers) {
      isFollower[follower.id] = true;
      feeds.push({
        UserId: follower.id,
        NotificationId: ntf.id,
        read: false
      });
    }

    const userNtfs = await models.UserNotification.bulkCreate(feeds);
    for (let userNtf of userNtfs) {
      followerNtf[userNtf.UserId] = userNtf;
    }

    const listingOwner = await models.User.findByPk(UserId);
    const io = sockets.io;

    for (let key in io.sockets.sockets) {
      if (io.sockets.sockets.hasOwnProperty(key)) {
        if (isFollower[io.sockets.sockets[key].userId]) {
          io.sockets.sockets[key].emit("NEW_NOTIFICATION", {
            category: "NEW_LISTING",
            content: "posted new offer",
            link: `/product/${ListingId}/`,
            UserNotificationId: followerNtf.id,
            createdAt: followerNtf.createdAt,
            Actor: {
              avatar: listingOwner.avatar,
              first_name: listingOwner.first_name,
              last_name: listingOwner.last_name,
              id: listingOwner.id
            }
          });
        }
      }
    }
  } catch (e) {
    console.log(e);
  }
}

async function notifyNewOrder(orderId) {
  const order = await models.Order.findByPk(orderId, {
    include: [
      { model: models.User, as: 'Buyer' },
      { model: models.User, as: 'Seller' },
      {
        model: models.Listing,
        include: [
          { model: models.Category },
          { model: models.Condition },
          { model: models.PricingTerm },
          {
            model: models.Country,
            include: [{ model: models.Currency }]
          },
        ]
      }
    ]
  });
  const ntf = await models.Notification.create({
    content: `ordered your listing ${order.Listing.title}.`,
    category: "NEW_ORDER",
    link: `/profile/${order.Buyer.id}/`,
    actionUser: order.Buyer.id
  });

  const userNtf = await models.UserNotification.create({
    UserId: order.Seller.id,
    NotificationId: ntf.id,
    read: false
  });

  const io = sockets.io;

  for (let key in io.sockets.sockets) {
    if (io.sockets.sockets.hasOwnProperty(key)) {
      if (order.Seller.id == io.sockets.sockets[key].userId) {

        io.sockets.sockets[key].emit("NEW_NOTIFICATION", {
          category: "NEW_ORDER",
          content: `ordered your listing ${order.Listing.title}`,
          link: `/profile/${order.Buyer.id}/`,
          UserNotificationId: userNtf.id,
          createdAt: userNtf.createdAt,
          Actor: {
            avatar: order.Buyer.avatar,
            first_name: order.Buyer.first_name,
            last_name: order.Buyer.last_name,
            id: order.Buyer.id
          }
        });
      }
    }
  }

}

module.exports = {
  notifyFollow,
  notifyNewListing,
  notifyNewOrder
};
