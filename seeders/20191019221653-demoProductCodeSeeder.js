'use strict';

module.exports = {

  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('ProductCodes', [
      {
        id: 1,
        code: null,
        description: 'Recyclable Flastics',
        parentId: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        code: null,
        description: 'Prime Plastics',
        parentId: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        code: '391510',
        description: 'Waste, Parings and Scrap of Polymers of Ethynlene',
        parentId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        code: '390950',
        description: 'Polyurethanes in Primary form',
        parentId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('ProductCodes', null, {});
  }
};
