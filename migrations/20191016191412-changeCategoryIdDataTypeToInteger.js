'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('Listings', 'categoryId', {
      type: Sequelize.INTEGER
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('Listings', 'categoryId', {
      type: Sequelize.STRING
    })
  }
};
