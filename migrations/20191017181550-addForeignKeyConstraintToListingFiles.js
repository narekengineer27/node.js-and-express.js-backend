'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.addColumn('ListingFiles', 'type', {
          after: 'url',
          type: Sequelize.ENUM('IMAGE', 'VIDEO')
        }, { transaction: t }),
        queryInterface.addColumn('ListingFiles', 'order', {
          after: 'url',
          type: Sequelize.INTEGER
        }, { transaction: t }),
        queryInterface.addConstraint('ListingFiles', ['listingId'], {
          type: 'FOREIGN KEY',
          name: 'fk_listingFiles_listing_id',
          references: {
            table: 'Listings',
            field: 'id'
          },
          onDelete: 'cascade',
          onUpdate: 'cascade'
        }, { transaction: t })
      ])
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.removeConstraint('ListingFiles', 'fk_listingFiles_listing_id', { transaction: t }),
        queryInterface.removeColumn('ListingFiles', 'type', { transaction: t }),
        queryInterface.removeColumn('ListingFiles', 'order', { transaction: t })
      ]);
    });
  }
};
