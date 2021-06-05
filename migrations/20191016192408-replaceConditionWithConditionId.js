'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.renameColumn('Listings', 'condition', 'conditionId')
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.renameColumn('Listings', 'conditionId', 'condition')
  }
};
