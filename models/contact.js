'use strict';
module.exports = (sequelize, DataTypes) => {
  const Contact = sequelize.define('Contact', {
    ListingId: DataTypes.INTEGER,
    SellerId: DataTypes.INTEGER,
    CustomerId: DataTypes.INTEGER
  }, {});
  Contact.associate = function (models) {
    Contact.belongsTo(models.User, { as: 'Seller', foreignKey: 'SellerId' });
    Contact.belongsTo(models.User, { as: 'Customer', foreignKey: 'CustomerId' });
    Contact.belongsTo(models.Listing, { as: 'Listing', foreignKey: 'ListingId'});
  };
  return Contact;
};