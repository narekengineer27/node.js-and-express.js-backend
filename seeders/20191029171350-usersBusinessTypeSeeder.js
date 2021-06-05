'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('UserBusinessTypes', [
      {
        id: 1,
        UserId: 1,
        BusinessTypeId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        UserId: 1,
        BusinessTypeId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        UserId: 1,
        BusinessTypeId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('UserBusinessTypes', null, {});
  }
};
