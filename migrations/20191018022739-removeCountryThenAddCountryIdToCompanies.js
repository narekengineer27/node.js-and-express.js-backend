'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.removeColumn('Companies', 'country', { transaction: t }),
        queryInterface.addColumn('Companies', 'countryId', {
          after: 'city',
          type: Sequelize.INTEGER
        }, { transaction: t })
      ]);
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.removeColumn('Companies', 'countryId', { transaction: t }),
        queryInterface.addColumn('Companies', 'country', {
          after: 'city',
          type: Sequelize.STRING
        }, { transaction: t })
      ]);
    })
  }
};