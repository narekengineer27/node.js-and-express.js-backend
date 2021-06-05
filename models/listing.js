"use strict";
module.exports = (sequelize, DataTypes) => {
  const Listing = sequelize.define(
    "Listing",
    {
      UserId: DataTypes.INTEGER,
      title: DataTypes.STRING,
      description: DataTypes.TEXT,
      status: DataTypes.ENUM("Active", "Pending", "Disapproved", "Expiring"),
      CategoryId: DataTypes.INTEGER,
      ConditionId: DataTypes.INTEGER,
      ProductCodeId: DataTypes.INTEGER,
      PackagingId: DataTypes.INTEGER,
      unit: DataTypes.ENUM("lb", "mt", "kg"),
      supply: DataTypes.ENUM("Ongoing", "One-off"),
      PricingTermId: DataTypes.INTEGER,
      address: DataTypes.STRING,
      city: DataTypes.STRING,
      CountryId: DataTypes.STRING,
      zipcode: DataTypes.STRING,
      geography: DataTypes.ENUM("global", "local"),
      users: DataTypes.ENUM("ALL", "PREMIUM"),
      quantity: DataTypes.FLOAT,
      pricePerUnit: DataTypes.FLOAT,
      auctionDateTime: DataTypes.DATE,
      auctionInterval: DataTypes.FLOAT,
      isAuction: DataTypes.BOOLEAN
    },
    {}
  );
  Listing.associate = function(models) {
    Listing.belongsTo(models.User);
    Listing.belongsTo(models.Category);
    Listing.belongsTo(models.Condition);
    Listing.belongsTo(models.PricingTerm);
    Listing.belongsTo(models.ProductCode);
    Listing.belongsTo(models.Packaging);
    Listing.hasMany(models.ListingFile);
    Listing.belongsTo(models.Country);
    Listing.hasMany(models.Auction);
  };
  return Listing;
};
