'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('Listings', 'supply', {
      type: Sequelize.ENUM('Ongoing', 'One-off')
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('Listings', 'supply', {
      type: Sequelize.STRING
    })
  }
};
