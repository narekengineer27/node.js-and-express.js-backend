'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.addColumn('Users', 'avatar', {
          after: 'type',
          type: Sequelize.STRING
        }, { transaction: t }),
        queryInterface.addColumn('Users', 'businessDescription', {
          after: 'type',
          type: Sequelize.TEXT
        }, { transaction: t }),
      ]);
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.removeColumn('Users', 'avatar', { transaction: t }),
        queryInterface.removeColumn('Users', 'businessDescription', { transaction: t }),
      ]);
    })
  }
};
