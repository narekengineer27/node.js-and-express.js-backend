'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('Listings', 'users', {
      type: Sequelize.ENUM('ALL', 'PREMIUM')
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('Listings', 'users', {
      type: Sequelize.STRING
    })
  }
};
