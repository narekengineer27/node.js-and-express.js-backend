'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.renameColumn('Listings', 'productCode', 'productCodeId')
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.renameColumn('Listings', 'productCodeId', 'productCode');
  }
};
