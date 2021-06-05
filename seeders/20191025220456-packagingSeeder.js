'use strict';

const sequelize = require('sequelize');
const Op = sequelize.Op;

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Packagings', [
      {
        id: 3,
        name: 'Bucket',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        name: 'Jar',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 5,
        name: 'Loose',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 6,
        name: 'Lug',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 7,
        name: 'Other',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 8,
        name: 'Reels',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 9,
        name: 'Sack',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 10,
        name: 'Skid',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 11,
        name: 'Skid elevating or lift truck',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 12,
        name: 'Slip Sheet',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 13,
        name: 'International Trailer/Container Load (Rail)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 14,
        name: 'Tray',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 15,
        name: 'Empty/Unknown Packaging',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 16,
        name: 'Bags',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 17,
        name: 'Boxes',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 18,
        name: 'Bundles',
        createdAt: new Date(),
        updatedAt: new Date()
      },

    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Packagings', {
      id: {
        [Op.gt]: 2
      }
    }, {});
  }
};
