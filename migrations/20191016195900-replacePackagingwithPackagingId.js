'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.renameColumn('Listings', 'packaging', 'packagingId')
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.renameColumn('Listings', 'packagingId', 'packaging');
  }
};
