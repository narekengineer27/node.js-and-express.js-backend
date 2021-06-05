'use strict';
module.exports = (sequelize, DataTypes) => {
  const PricingTerm = sequelize.define('PricingTerm', {
    name: DataTypes.STRING
  }, {});
  PricingTerm.associate = function(models) {
    PricingTerm.hasMany(models.Listing);
  };
  return PricingTerm;
};