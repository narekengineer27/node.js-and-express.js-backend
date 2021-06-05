'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Currencies', 'unicode', {
      type: Sequelize.STRING,
      after: 'symbol'
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Currencies', 'unicode');
  }
};
