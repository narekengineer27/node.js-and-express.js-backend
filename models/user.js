"use strict";
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      CompanyId: DataTypes.INTEGER,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      type: DataTypes.ENUM("NORMAL", "PREMIUM", "ADMIN"),
      businessDescription: DataTypes.TEXT,
      avatar: DataTypes.STRING,
      role_id: DataTypes.INTEGER,
      email_verified: DataTypes.BOOLEAN
    },
    {}
  );
  User.associate = function(models) {
    User.belongsTo(models.Company);
    User.hasMany(models.Listing);
    User.belongsToMany(models.BusinessType, {
      through: {
        model: models.UserBusinessType,
        unique: false
      },
      foreignKey: "UserId",
      constraints: false
    });
    User.belongsToMany(models.User, {
      through: {
        model: models.UserFollower
      },
      as: "followers", // base is user
      foreignKey: "UserId",
      constraints: false
    });
    User.belongsToMany(models.User, {
      through: {
        model: models.UserFollower
      },
      as: "followings", // base is user, if A is follower of B, you should refer FollowerId to get A's followings
      foreignKey: "FollowerId",
      constraints: false
    });
  };
  return User;
};
