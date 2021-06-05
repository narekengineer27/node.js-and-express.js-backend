'use strict';
module.exports = (sequelize, DataTypes) => {
  const Invoice = sequelize.define('Invoice', {
    invoiceNumber: DataTypes.STRING,
    OrderId: DataTypes.INTEGER,
    fee: DataTypes.FLOAT,
    currency: DataTypes.STRING,
    UserId: DataTypes.INTEGER,
    dueDate: DataTypes.DATE,
    userRole: DataTypes.ENUM("Seller", "Buyer"),
    status: DataTypes.ENUM("Paid", "Unpaid", "Cancelled"),
    url: DataTypes.STRING,
    zipUrl: DataTypes.STRING
  }, {});
  Invoice.associate = function (models) {
    Invoice.belongsTo(models.Order);
    Invoice.belongsTo(models.User);
  };
  return Invoice;
};