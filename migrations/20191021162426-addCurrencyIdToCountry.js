'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Countries', 'CurrencyId', {
      after: 'phoneCode',
      type: Sequelize.INTEGER
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Countries', 'CurrencyId');
  }
};
