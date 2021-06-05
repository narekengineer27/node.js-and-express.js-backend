'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserFollower = sequelize.define('UserFollower', {
    UserId: DataTypes.INTEGER,
    FollowerId: DataTypes.INTEGER
  }, {});
  UserFollower.associate = function(models) {
    // associations can be defined here
  };
  return UserFollower;
};