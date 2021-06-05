'use strict';
module.exports = (sequelize, DataTypes) => {
  const Condition = sequelize.define('Condition', {
    name: DataTypes.STRING,
    parentId: DataTypes.INTEGER
  }, {});
  Condition.associate = function (models) {
    Condition.hasMany(models.Listing);
  };
  return Condition;
};  