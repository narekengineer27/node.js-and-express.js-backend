'use strict';

const sequelize = require('sequelize');
const Op = sequelize.Op;

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Currencies', [
      {
        id: 3,
        name: 'Danish Krone',
        code: 'DKK',
        symbol: 'kr',
        unicode: 'kr',
        rate: 6.58,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        name: 'Pound Sterling',
        code: 'GBP',
        symbol: '&pound;',
        unicode: '£',
        rate: 0.65,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 5,
        name: 'Australian Dollar',
        code: 'AUD',
        symbol: '&#36;',
        unicode: '$',
        rate: 1.41,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 6,
        name: 'Singapore',
        code: 'SGD',
        symbol: '&#36;',
        unicode: '$',
        rate: 1.41,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 7,
        name: 'Swedish Krona',
        code: 'SEK',
        symbol: 'kr',
        unicode: 'kr',
        rate: 8.24,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 8,
        name: 'Mexican Peso',
        code: 'MXN',
        symbol: '&#36;',
        unicode: '$',
        rate: 16.83,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 9,
        name: 'Brazilian Real',
        code: 'BRL',
        symbol: 'R$',
        unicode: 'R$',
        rate: 3.88,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 10,
        name: 'Malaysia Ringgit',
        code: 'MYR',
        symbol: 'RM',
        unicode: 'RM',
        rate: 4.31,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 11,
        name: 'Philippine Peso',
        code: 'PHP',
        symbol: 'P',
        unicode: 'p',
        rate: 46.73,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 12,
        name: 'Swiss Franc',
        code: 'CHF',
        symbol: '&euro;',
        unicode: '€',
        rate: 0.97,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 13,
        name: 'India',
        code: 'INR',
        symbol: '&#x20B9;',
        unicode: '₹',
        rate: 66.24,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 14,
        name: 'Argentine Peso',
        code: 'ARS',
        symbol: '&#36;',
        unicode: '$',
        rate: 9.35,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 15,
        name: 'Canadia Dollar',
        code: 'CAD',
        symbol: '&#36;',
        unicode: '$',
        rate: 1.33,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 16,
        name: 'Chinese Yuan',
        code: 'CNY',
        symbol: '&#165;',
        unicode: '¥',
        rate: 6.37,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Currencies', {
      id: {
        [Op.gt]: 2
      }
    }, {});
  }
};
