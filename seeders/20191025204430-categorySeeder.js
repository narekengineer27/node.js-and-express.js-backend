'use strict';

const sequelize = require('sequelize');
const Op = sequelize.Op;

module.exports = {

  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Categories', [
      {
        id: 6,
        name: 'Other',
        parentId: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 7,
        name: 'BOPP',
        parentId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 8,
        name: 'EPS',
        parentId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 9,
        name: 'HOPE',
        parentId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 10,
        name: 'HIPS',
        parentId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 11,
        name: 'LDPE',
        parentId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 12,
        name: 'LLDP',
        parentId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 13,
        name: 'Nory1',
        parentId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 14,
        name: 'Nylon (PA)',
        parentId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 15,
        name: 'PBT',
        parentId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 16,
        name: 'PE',
        parentId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 17,
        name: 'PET/PETE',
        parentId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 18,
        name: 'PETG',
        parentId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 19,
        name: 'PLA',
        parentId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 20,
        name: 'Polycarbonate',
        parentId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 21,
        name: 'Polyester',
        parentId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 22,
        name: 'Polyurethane',
        parentId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 23,
        name: 'PP',
        parentId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 24,
        name: 'PS',
        parentId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 25,
        name: 'PVA',
        parentId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 26,
        name: 'PVC',
        parentId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 27,
        name: 'TPE',
        parentId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 28,
        name: 'TPO',
        parentId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 29,
        name: 'TPU',
        parentId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 31,
        name: 'Calcium sulfate',
        parentId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 32,
        name: 'Color concentrate',
        parentId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 33,
        name: 'Flame retardants',
        parentId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 34,
        name: 'Masterbatch',
        parentId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 35,
        name: 'Silica',
        parentId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 36,
        name: 'Talc',
        parentId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 37,
        name: 'Cardboard (OCC)',
        parentId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 38,
        name: 'Mixed rigid plastics (MRP)',
        parentId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 39,
        name: 'Other plastic',
        parentId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 40,
        name: 'Other, not plastic',
        parentId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Categories', {
      id: {
        [Op.gt]: 5
      }
    }, {});
  }
};
