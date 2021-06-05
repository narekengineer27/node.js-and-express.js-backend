'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Invoices', 'zipUrl', {
      type: Sequelize.STRING,
      after: 'status'
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Invoices', 'zipUrl');
  }
};
