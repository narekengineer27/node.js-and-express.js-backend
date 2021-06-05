'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('Listings', 'geography', {
      type: Sequelize.ENUM('global', 'local')
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('Listings', 'geography', {
      type: Sequelize.STRING
    })
  }
};