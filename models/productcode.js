'use strict';
module.exports = (sequelize, DataTypes) => {
  const ProductCode = sequelize.define('ProductCode', {
    code: DataTypes.STRING,
    description: DataTypes.STRING,
    parentId: DataTypes.INTEGER
  }, {});
  ProductCode.associate = function(models) {
    ProductCode.hasMany(models.Listing)
  };
  return ProductCode;
};