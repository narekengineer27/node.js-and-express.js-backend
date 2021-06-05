'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addConstraint('Companies', ['countryId'], {
      type: 'FOREIGN KEY',
      name: 'fk_companies_country_id',
      references: {
        table: 'Countries',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeConstraint('Companies', 'fk_companies_country_id');
  }
};
