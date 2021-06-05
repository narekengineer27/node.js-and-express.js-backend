'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserPaymentMethod = sequelize.define('UserPaymentMethod', {
    UserId: DataTypes.INTEGER,
    stripeCustomerId: DataTypes.STRING,
    card: DataTypes.STRING,
    bank: DataTypes.STRING
  }, {});
  UserPaymentMethod.associate = function(models) {
    // associations can be defined here
  };
  return UserPaymentMethod;
};