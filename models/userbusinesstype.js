'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserBusinessType = sequelize.define('UserBusinessType', {
    UserId: DataTypes.INTEGER,
    BusinessTypeId: DataTypes.INTEGER
  }, {});
  UserBusinessType.associate = function (models) {
  };
  return UserBusinessType;
};