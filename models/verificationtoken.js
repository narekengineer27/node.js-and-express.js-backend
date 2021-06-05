'use strict';
module.exports = function (sequelize, DataTypes) {
  var VerificationToken = sequelize.define('VerificationToken', {
    UserId: DataTypes.STRING,
    token: DataTypes.STRING
  }, {
    classMethods: {
      associate: function (models) {
        verificationtoken.belongsTo(models.User, {
          as: "user",
          foreignKey: "UserId",
          foreignKeyConstraint: true
        });
      }
    }
  });
  return VerificationToken;
};