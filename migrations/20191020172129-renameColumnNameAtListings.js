'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.renameColumn('Listings', 'userId', 'UserId');
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.renameColumn('Listings', 'UserId', 'userId');
  }
};
