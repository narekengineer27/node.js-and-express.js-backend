'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Conditions', 'parentId', {
      after: 'name',
      type: Sequelize.INTEGER
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Conditions', 'parentId');
  }
};
