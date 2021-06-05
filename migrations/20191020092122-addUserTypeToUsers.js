'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Users', 'type', {
      after: 'password',
      type: Sequelize.ENUM('NORMAL', 'PREMIUM', 'ADMIN')
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Users', 'type');
  }
};
