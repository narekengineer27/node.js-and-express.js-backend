'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Companies', [
      {
        id: 1,
        name: 'Molina Healthcare',
        address: '73 W Monroe St',
        city: 'Chicago',
        CountryId: 3,
        zipcode: '60603',
        formatted_address: '73 W Monroe St, Chicago, IL 60603',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        name: 'Vogteier',
        address: 'An der Oberrothe 1',
        city: 'Niederdoria',
        CountryId: 4,
        zipcode: '99986',
        formatted_address: 'An der Oberrothe 1, 99986 Niederdorla, Germany',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Companies', null, {});
  }
};
