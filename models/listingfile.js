'use strict';
module.exports = (sequelize, DataTypes) => {
  const ListingFile = sequelize.define('ListingFile', {
    ListingId: DataTypes.INTEGER,
    url: DataTypes.STRING,
    order: DataTypes.INTEGER,
    type: DataTypes.ENUM('IMAGE', 'VIDEO', 'PDF'),
  }, {});
  ListingFile.associate = function(models) {
    ListingFile.belongsTo(models.Listing);
  };
  return ListingFile;
};  