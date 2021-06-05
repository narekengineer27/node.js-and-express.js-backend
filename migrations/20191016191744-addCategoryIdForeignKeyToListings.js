'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addConstraint('Listings', ['categoryId'], {
      type: 'FOREIGN KEY',
      name: 'fk_listings_category_id',
      references: {
        table: 'Categories',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeConstraint('Listings', 'fk_listings_category_id');
  }
};
