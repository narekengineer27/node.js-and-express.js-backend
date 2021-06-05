"use strict";
module.exports = (sequelize, DataTypes) => {
  const Currency = sequelize.define(
    "Currency",
    {
      name: DataTypes.STRING,
      code: DataTypes.STRING,
      symbol: DataTypes.STRING,
      unicode: DataTypes.STRING,
      rate: DataTypes.FLOAT
    },
    {}
  );
  Currency.associate = function(models) {
    Currency.hasMany(models.Country);
  };
  return Currency;
};
