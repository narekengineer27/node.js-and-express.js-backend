'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Listings', 'status', {
      after: 'description',
      type: Sequelize.ENUM('Active', 'Pending', 'Disapproved', 'Expiring')
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Listings', 'status')
  }
};
