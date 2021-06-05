'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('UserPaymentMethods', 'iban', {
      type: Sequelize.STRING,
      after: 'bank'
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('UserPaymentMethods', 'iban');
  }
};
