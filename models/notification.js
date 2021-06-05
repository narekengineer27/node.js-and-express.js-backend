"use strict";
module.exports = (sequelize, DataTypes) => {
  const Notification = sequelize.define(
    "Notification",
    {
      content: DataTypes.STRING,
      category: DataTypes.ENUM(
        "FOLLOWED",
        "NEW_LISTING",
        "AUCTION_END",
        "AUCTION_WINNER",
        "AUCTION_OWNER"
      ),
      link: DataTypes.STRING,
      actionUser: DataTypes.INTEGER
    },
    {}
  );
  Notification.associate = function(models) {};
  return Notification;
};
