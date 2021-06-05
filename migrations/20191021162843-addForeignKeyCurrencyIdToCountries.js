'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addConstraint('Countries', ['CurrencyId'], {
      type: 'FOREIGN KEY',
      name: 'fk_countries_currency_id',
      references: {
        table: 'Currencies',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeConstraint('Countries', 'fk_countries_currency_id');
  }
};
