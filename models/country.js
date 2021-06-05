"use strict";
module.exports = (sequelize, DataTypes) => {
  const Country = sequelize.define(
    "Country",
    {
      name: DataTypes.STRING,
      alpha2Code: DataTypes.STRING,
      alpha3Code: DataTypes.STRING,
      numCode: DataTypes.STRING,
      phoneCode: DataTypes.STRING,
      CurrencyId: DataTypes.INTEGER
    },
    {}
  );
  Country.associate = function(models) {
    Country.hasMany(models.Company);
    Country.hasMany(models.Listing);
    Country.belongsTo(models.Currency);
  };
  return Country;
};
