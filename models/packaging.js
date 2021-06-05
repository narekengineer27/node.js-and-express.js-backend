'use strict';
module.exports = (sequelize, DataTypes) => {
  const Packaging = sequelize.define('Packaging', {
    name: DataTypes.STRING
  }, {});
  Packaging.associate = function(models) {
    Packaging.hasMany(models.Listing);
  };
  return Packaging;
};