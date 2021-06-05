"use strict";
module.exports = (sequelize, DataTypes) => {
  const UserNotification = sequelize.define(
    "UserNotification",
    {
      UserId: DataTypes.INTEGER,
      NotificationId: DataTypes.INTEGER,
      read: DataTypes.BOOLEAN
    },
    {}
  );
  UserNotification.associate = function(models) {
    UserNotification.belongsTo(models.Notification);
  };
  return UserNotification;
};
