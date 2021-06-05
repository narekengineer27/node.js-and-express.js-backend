'use strict';

const sequelize = require('sequelize');
const Op = sequelize.Op;

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Countries', [
      {
        id: 5,
        name: 'Australia',
        alpha2Code: 'AU',
        alpha3Code: 'AUS',
        numCode: '36',
        phoneCode: '61',
        CurrencyId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 6,
        name: 'Sweden',
        alpha2Code: 'SE',
        alpha3Code: 'SWE',
        numCode: '752',
        phoneCode: '46',
        CurrencyId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 7,
        name: 'Denmark',
        alpha2Code: 'DK',
        alpha3Code: 'DNK',
        numCode: '208',
        phoneCode: '45',
        CurrencyId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 8,
        name: 'Mexico',
        alpha2Code: 'ME',
        alpha3Code: 'MEX',
        numCode: '484',
        phoneCode: '52',
        CurrencyId: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 9,
        name: 'Brazil',
        alpha2Code: 'SG',
        alpha3Code: 'SGP',
        numCode: '702',
        phoneCode: '64',
        CurrencyId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 10,
        name: 'Malaysia',
        alpha2Code: 'MY',
        alpha3Code: 'MYS',
        numCode: '458',
        phoneCode: '60',
        CurrencyId: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 11,
        name: 'Philippines',
        alpha2Code: 'PH',
        alpha3Code: 'PHL',
        numCode: '608',
        phoneCode: '63',
        CurrencyId: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Countries', {
      id: {
        [Op.gt]: 4
      }
    }, {});
  }
};
