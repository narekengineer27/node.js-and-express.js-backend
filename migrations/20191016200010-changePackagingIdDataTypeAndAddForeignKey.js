'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction( t => {
      return Promise.all([
        queryInterface.changeColumn('Listings', 'packagingId', {
          type: Sequelize.INTEGER
        }, { transaction: t }),
        queryInterface.addConstraint('Listings', ['packagingId'], {
          type: 'FOREIGN KEY',
          name: 'fk_listings_packaging_id',
          references: {
            table: 'Packagings',
            field: 'id'
          },
          onDelete: 'cascade',
          onUpdate: 'cascade'
        }, { transaction: t })
      ])
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction( t => {
      return Promise.all([
        queryInterface.removeConstraint('Listings', 'fk_listings_packaging_id', { transaction: t }),
        queryInterface.changeColumn('Listings', 'packagingId', {
          type: Sequelize.STRING
        }, { transaction: t })
      ])
    })
  }
};
