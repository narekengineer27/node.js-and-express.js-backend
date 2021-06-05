'use strict';
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    name: DataTypes.STRING,
    parentId: DataTypes.INTEGER
  }, {});
  Category.associate = function(models) {
    Category.hasMany(models.Listing);
  };
  return Category;
};