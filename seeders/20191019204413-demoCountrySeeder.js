'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Countries', [
      {
        id: 1,
        name: 'Afghnistan',
        alpha2Code: 'AF',
        alpha3Code: 'AFG',
        numCode: '004',
        phoneCode: '93',
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        name: 'Albania',
        alpha2Code: 'AL',
        alpha3Code: 'ALB',
        numCode: '008',
        phoneCode: '355',
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        name: 'United State',
        alpha2Code: 'US',
        alpha3Code: 'USA',
        numCode: '840',
        phoneCode: '1',
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        name: 'Germany',
        alpha2Code: 'DE',
        alpha3Code: 'DEU',
        numCode: '276',
        phoneCode: '49',
        CurrencyId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Countries', null, {});
  }
};
