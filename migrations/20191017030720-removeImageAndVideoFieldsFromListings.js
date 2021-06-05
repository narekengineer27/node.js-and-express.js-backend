'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction( t => {
      return Promise.all([
        queryInterface.removeColumn('Listings', 'image', { transaction: t }),
        queryInterface.removeColumn('Listings', 'video', { transaction: t })
      ])
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction( t => {
      return Promise.all([
        queryInterface.addColumn('Listings', 'image', {
          after: 'pricePerUnit',
          type: Sequelize.STRING
        }, { transaction: t }),
        queryInterface.addColumn('Listings', 'video', {
          after: 'pricePerUnit',
          type: Sequelize.STRING
        }, { transaction: t })
      ])
    })
  }
};
