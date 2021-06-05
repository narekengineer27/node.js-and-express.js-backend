'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction( t => {
      return Promise.all([
        queryInterface.changeColumn('Listings', 'conditionId', {
          type: Sequelize.INTEGER
        }, { transaction: t }),
        queryInterface.addConstraint('Listings', ['conditionId'], {
          type: 'FOREIGN KEY',
          name: 'fk_listings_condition_id',
          references: {
            table: 'Conditions',
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
        queryInterface.removeConstraint('Listings', 'fk_listings_condition_id', { transaction: t }),
        queryInterface.changeColumn('Listings', 'conditionId', {
          type: Sequelize.STRING
        }, { transaction: t })
      ])
    })
  }
};
