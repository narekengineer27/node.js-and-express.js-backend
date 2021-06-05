'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('Listings', 'unit', {
      type: Sequelize.ENUM('lb', 'mt', 'kg')
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('Listings', 'unit', {
      type: Sequelize.STRING
    })
  }
};
