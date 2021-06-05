'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Invoices', 'url', {
      type: Sequelize.STRING,
      after: 'status'
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Invoices', 'url');
  }
};
