'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction( t => {
      return Promise.all([
        queryInterface.changeColumn('Listings', 'pricingTermId', {
          type: Sequelize.INTEGER
        }, { transaction: t }),
        queryInterface.addConstraint('Listings', ['pricingTermId'], {
          type: 'FOREIGN KEY',
          name: 'fk_listings_pricingTerm_id',
          references: {
            table: 'PricingTerms',
            field: 'id'
          },
          onDelete: 'cascade',
          onUpdate: 'cascade'
        }, { transaction: t })
      ])
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction( t => {
      return Promise.all([
        queryInterface.removeConstraint('Listings', 'fk_listings_pricingTerm_id', { transaction: t }),
        queryInterface.changeColumn('Listings', 'pricingTermId', {
          type: Sequelize.STRING
        }, { transaction: t })
      ])
    })
  }
};
