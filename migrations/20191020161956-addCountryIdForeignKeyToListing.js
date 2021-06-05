'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addConstraint('Listings', ['countryId'], {
      type: 'FOREIGN KEY',
      name: 'fk_listings_country_id',
      references: {
        table: 'Countries',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeConstraint('Listings', 'fk_listings_country_id');
  }
};
  