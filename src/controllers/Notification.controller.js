import models, { sequelize } from "../../models";
import api from "../tools/common";
const Op = sequelize.Op;

async function getNotifications(UserId, limit = null) {
  try {
    let unreadCount = await models.UserNotification.count({
      where: {
        UserId,
        read: false
      }
    });
    let userNotifications = await models.UserNotification.findAll({
      limit,
      where: {
        UserId
      },
      include: [
        {
          model: models.Notification
        }
      ]
    });

    let nl = [];
    await Promise.all(
      userNotifications.map(async x => {
        switch (x.Notification.category) {
          case "AUCTION_END":
          case "AUCTION_WINNER":
          case "AUCTION_OWNER":
          case "FOLLOWED":
          case "NEW_LISTING":
          case "NEW_ORDER":
            let Actor = null;
            if (x.Notification.actionUser) {
              const ActorDetail = await models.User.findByPk(
                x.Notification.actionUser
              );
              Actor = {
                avatar: ActorDetail.avatar,
                first_name: ActorDetail.first_name,
                last_name: ActorDetail.last_name,
                id: ActorDetail.id
              };
            }
            nl.push({
              category: x.Notification.category,
              content: x.Notification.content,
              link: x.Notification.link,
              UserNotificationId: x.id,
              createdAt: x.createdAt,
              read: x.read,
              Actor
            });
            break;
          default:
        }
      })
    );
    return {
      unreadCount,
      notifications: nl
    };
  } catch (e) {
    throw e;
  }
}

async function getSomeNotifications(req, res, next) {
  try {
    const result = await getNotifications(req.UserId, 20);
    api.ok(res, result);
  } catch (e) {
    api.error(res, e.message, 400);
  }
}

async function getAllNotifications(req, res, next) {
  try {
    const result = await getNotifications(req.UserId);
    api.ok(res, result);
  } catch (e) {
    api.error(res, e.message, 400);
  }
}

async function markAsRead(req, res, next) {
  try {
    const userNtf = await models.UserNotification.findByPk(req.params.id);
    if (userNtf) {
      await userNtf.update({ read: true });
      api.ok(res, {});
    } else {
      api.error(res, "Item not found", 404);
    }
  } catch (e) {
    api.error(res, e.message, 400);
  }
}

async function deleteNotification(req, res, next) {
  try {
    const userNtf = await models.UserNotification.findByPk(req.params.id);
    if (userNtf) {
      const ntf = await models.Notification.findByPk(userNtf.NotificationId);
      await ntf.destroy();
      await userNtf.destroy();
      api.ok(res, {});
    } else {
      api.error(res, "Item not found", 404);
    }
  } catch (e) { }
}
module.exports = {
  getSomeNotifications,
  getAllNotifications,
  markAsRead,
  deleteNotification
};
