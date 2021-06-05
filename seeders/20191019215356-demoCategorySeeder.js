'use strict';

module.exports = {

  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Categories', [
      {
        id: 1,
        name: 'Plastics',
        parentId: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        name: 'Additives & Filter',
        parentId: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        name: 'ABS',
        parentId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        name: 'Acrylic',
        parentId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 5,
        name: 'Calicum Carbonate',
        parentId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Categories', null, {});
  }
};
