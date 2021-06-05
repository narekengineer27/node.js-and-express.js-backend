'use strict';

const sequelize = require('sequelize');
const Op = sequelize.Op;

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('PricingTerms', [
      {
        id: 3,
        name: 'FAS',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        name: 'FOB',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 5,
        name: 'CFR',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 6,
        name: 'CIF',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 7,
        name: 'CPT',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 8,
        name: 'CIP',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 9,
        name: 'DAF',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 10,
        name: 'DES',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 11,
        name: 'DEQ',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 12,
        name: 'DDU',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 13,
        name: 'Other',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('PricingTerms', {
      id: {
        [Op.gt]: 2
      }
    },
      null, {});
  }
};
