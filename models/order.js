'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    BuyerId: DataTypes.INTEGER,
    SellerId: DataTypes.INTEGER,
    ListingId: DataTypes.INTEGER,
    status: DataTypes.ENUM("Active", "Completed", "Cancelled")
  }, {});
  Order.associate = function (models) {
    Order.belongsTo(models.User, {
      as: "Buyer",
      foreignKey: "BuyerId"
    });
    Order.belongsTo(models.User, {
      as: "Seller",
      foreignKey: "SellerId"
    });
    Order.belongsTo(models.Listing);
  };
  return Order;
};