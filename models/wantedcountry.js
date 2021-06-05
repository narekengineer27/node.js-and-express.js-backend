"use strict";
module.exports = (sequelize, DataTypes) => {
  const WantedCountry = sequelize.define(
    "WantedCountry",
    {
      WantedId: DataTypes.INTEGER,
      CountryId: DataTypes.INTEGER
    },
    {}
  );
  WantedCountry.associate = function(models) {
    WantedCountry.belongsTo(models.Wanted);
  };
  return WantedCountry;
};
