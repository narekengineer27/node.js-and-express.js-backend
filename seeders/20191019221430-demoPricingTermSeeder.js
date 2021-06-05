'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('PricingTerms', [
      {
        id: 1,
        name: 'EXW',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        name: 'FCA',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('PricingTerms', null, {});
  }
};
