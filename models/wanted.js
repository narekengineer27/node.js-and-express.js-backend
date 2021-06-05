"use strict";
module.exports = (sequelize, DataTypes) => {
  const Wanted = sequelize.define(
    "Wanted",
    {
      name: DataTypes.STRING,
      UserId: DataTypes.INTEGER,
      CategoryId: DataTypes.INTEGER,
      ConditionId: DataTypes.INTEGER,
      notification: DataTypes.ENUM("INSTANT", "ONCE_A_DAY", "ONCE_A_WEEK", "NO")
    },
    {}
  );
  Wanted.associate = function(models) {
    Wanted.belongsTo(models.User);
    Wanted.belongsTo(models.Category);
    Wanted.belongsTo(models.Condition);
    Wanted.hasMany(models.WantedCountry);
  };
  return Wanted;
};
