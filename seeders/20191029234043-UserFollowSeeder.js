'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('UserFollowers', [
      {
        id: 1,
        UserId: 1,
        FollowerId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        UserId: 2,
        FollowerId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('UserFollowers', null, {});
  }
};
