'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([]);
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Listings', null, {});
  }
};
