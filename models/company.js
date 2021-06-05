'use strict';
module.exports = (sequelize, DataTypes) => {
  const Company = sequelize.define('Company', {
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    CountryId: DataTypes.INTEGER,
    zipcode: DataTypes.STRING,
    lat: DataTypes.FLOAT,
    lng: DataTypes.FLOAT,
    formatted_address: DataTypes.STRING,
  }, {});
  Company.associate = function(models) {
    Company.hasMany(models.User);
    Company.belongsTo(models.Country);
  };
  return Company;
};