'use strict';
module.exports = (sequelize, DataTypes) => {
  const Wishlist = sequelize.define('Wishlist', {
    UserId: DataTypes.INTEGER,
    ListingId: DataTypes.INTEGER
  }, {});
  Wishlist.associate = function(models) {
      Wishlist.belongsTo(models.User);
      Wishlist.belongsTo(models.Listing)
  };
  return Wishlist;
};