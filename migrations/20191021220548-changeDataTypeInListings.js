'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.changeColumn('Listings', 'quantity', {
          type: Sequelize.FLOAT
        }),
        queryInterface.changeColumn('Listings', 'pricePerUnit', {
          type: Sequelize.FLOAT
        })
      ]);
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.changeColumn('Listings', 'quantity', {
          type: Sequelize.INTEGER
        }),
        queryInterface.changeColumn('Listings', 'pricePerUnit', {
          type: Sequelize.INTEGER
        })
      ]);
    })
  }
};
