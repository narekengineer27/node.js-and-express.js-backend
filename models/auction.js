"use strict";
module.exports = (sequelize, DataTypes) => {
  const Auction = sequelize.define(
    "Auction",
    {
      ListingId: DataTypes.INTEGER,
      BidderId: DataTypes.INTEGER,
      price: DataTypes.FLOAT
    },
    {}
  );
  Auction.associate = function(models) {
    Auction.belongsTo(models.User, {
      foreignKey: "BidderId",
      targetKey: "id"
    });
    Auction.belongsTo(models.Listing, {
      foreignKey: "ListingId",
      targetKey: "id"
    });
  };
  return Auction;
};
