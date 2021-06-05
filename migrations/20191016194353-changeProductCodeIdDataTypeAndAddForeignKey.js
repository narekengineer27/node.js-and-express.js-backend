'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction( t => {
      return Promise.all([
        queryInterface.changeColumn('Listings', 'productCodeId', {
          type: Sequelize.INTEGER
        }, { transaction: t }),
        queryInterface.addConstraint('Listings', ['productCodeId'], {
          type: 'FOREIGN KEY',
          name: 'fk_listings_productcode_id',
          references: {
            table: 'ProductCodes',
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
        queryInterface.removeConstraint('Listings', 'fk_listings_productcode_id', { transaction: t }),
        queryInterface.changeColumn('Listings', 'productCodeId', {
          type: Sequelize.STRING
        }, { transaction: t })
      ])
    })
  }
};
