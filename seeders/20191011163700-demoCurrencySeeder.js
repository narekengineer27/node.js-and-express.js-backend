'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Currencies', [
      {
        id: 1,
        name: 'US Dollar',
        code: 'USD',
        symbol: '&#36;',
        unicode: '$',
        rate: 1.00,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        name: 'Europe',
        code: 'EUR',  
        symbol: '&euro;',
        unicode: '€',
        rate: 0.88,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Currencies', null, {});
  }
};
