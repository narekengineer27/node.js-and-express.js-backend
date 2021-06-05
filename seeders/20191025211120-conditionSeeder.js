'use strict';

const sequelize = require('sequelize');
const Op = sequelize.Op;

module.exports = {

  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Conditions', [
      {
        id: 6,
        name: 'Other',
        parentId: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 7,
        name: 'Fiber',
        parentId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 8,
        name: 'Film',
        parentId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 9,
        name: 'Flake',
        parentId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 10,
        name: 'Loose',
        parentId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 11,
        name: 'Lump',
        parentId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 12,
        name: 'Mixed recycled',
        parentId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 13,
        name: 'Regrind',
        parentId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 14,
        name: 'Repro pellets',
        parentId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 15,
        name: 'Rolls',
        parentId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 16,
        name: 'Generic Prime',
        parentId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 17,
        name: 'Off-Grade/Wide Spec',
        parentId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 18,
        name: 'Pencil Prime',
        parentId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 19,
        name: 'Other condition',
        parentId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Conditions', {
      id: {
        [Op.gt]: 5
      }
    }, {});
  }
};
