"use strict";
module.exports = (sequelize, DataTypes) => {
  const Message = sequelize.define(
    "Message",
    {
      ListingId: DataTypes.INTEGER,
      Sender: DataTypes.INTEGER,
      Recipient: DataTypes.INTEGER,
      content: DataTypes.TEXT,
      isRead: DataTypes.BOOLEAN,
      time: DataTypes.DATE
    },
    {}
  );
  Message.associate = function(models) {
    Message.belongsTo(models.User, {
      as: "SenderInfo",
      foreignKey: "Sender"
    });
    Message.belongsTo(models.User, {
      as: "RecipientInfo",
      foreignKey: "Recipient"
    });
  };
  return Message;
};
