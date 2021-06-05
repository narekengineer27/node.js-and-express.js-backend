'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Invoices', 'currency', {
      type: Sequelize.STRING,
      after: 'fee'
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Invoices', 'currency');
  }
};
