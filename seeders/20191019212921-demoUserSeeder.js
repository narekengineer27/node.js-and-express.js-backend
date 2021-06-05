'use strict';

const bcrypt = require('bcrypt');

module.exports = {

  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        id: 1,
        first_name: 'Charles',
        last_name: 'Jones',
        CompanyId: 1,
        email: 'user@test.com',
        password: bcrypt.hashSync('password', 10),
        type: 'PREMIUM',
        email_verified: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        first_name: 'Justin',
        last_name: 'Allen',
        CompanyId: 2,
        email: 'justim@mail.com',
        password: bcrypt.hashSync('password', 10),
        email_verified: 1,
        type: 'PREMIUM',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        first_name: 'Cabka',
        last_name: ' ',
        CompanyId: 2,
        email: 'lauritz@gmail.com',
        password: bcrypt.hashSync('password', 10),
        email_verified: 1,
        type: 'ADMIN',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
