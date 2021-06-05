'use strict';
module.exports = (sequelize, DataTypes) => {
  const BusinessType = sequelize.define('BusinessType', {
    name: DataTypes.STRING
  }, {});
  BusinessType.associate = function (models) {
    BusinessType.belongsToMany(models.User, {
      through: {
        model: models.UserBusinessType,
        unique: false
      },
      foreignKey: 'BusinessTypeId',
      constraints: false
    });
  };
  return BusinessType;
};