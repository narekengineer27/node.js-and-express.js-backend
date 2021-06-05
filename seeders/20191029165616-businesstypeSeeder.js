'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('BusinessTypes', [
      {
        id: 1,
        name: 'Broker',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        name: 'Manufacturer',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        name: 'Compounder',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        name: 'Recycler',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 5,
        name: 'MRF',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 6,
        name: 'Hauler',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 7,
        name: 'Other',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('BusinessTypes', null, {});
  }
};
