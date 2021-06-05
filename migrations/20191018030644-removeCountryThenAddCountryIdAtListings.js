'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.removeColumn('Listings', 'country', { transaction: t }),
        queryInterface.addColumn('Listings', 'countryId', {
          after: 'city',
          type: Sequelize.INTEGER
        }, { transaction: t })
      ]);
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.removeColumn('Listings', 'countryId', { transaction: t }),
        queryInterface.addColumn('Listings', 'country', {
          after: 'city',
          type: Sequelize.STRING
        }, { transaction: t })
      ]);
    });
  }
};
