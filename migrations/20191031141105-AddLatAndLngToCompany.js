'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.addColumn('Companies', 'lat', {
          after: 'zipcode',
          type: Sequelize.FLOAT
        }, { transaction: t }),
        queryInterface.addColumn('Companies', 'lng', {
          after: 'zipcode',
          type: Sequelize.FLOAT
        }, { transaction: t })
      ])
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.removeColumn('Companies', 'lat', { transaction: t }),
        queryInterface.removeColumn('Companies', 'lng', { transaction: t })
      ]);
    });
  }
};
