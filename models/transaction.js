'use strict';
module.exports = (sequelize, DataTypes) => {
  const Transaction = sequelize.define('Transaction', {
    InvoiceId: DataTypes.INTEGER,
    amount: DataTypes.FLOAT,
    currency: DataTypes.STRING,
    paymentMethod: DataTypes.STRING,
    methodId: DataTypes.STRING,
    type: DataTypes.ENUM("Pay", "Refund")
  }, {});
  Transaction.associate = function(models) {
    // associations can be defined here
  };
  return Transaction;
};