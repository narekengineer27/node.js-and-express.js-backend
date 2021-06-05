'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.renameColumn('Listings', 'pricingTerm', 'pricingTermId')
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.renameColumn('Listings', 'pricingTermId', 'pricingTerm');
  }
};
