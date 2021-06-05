'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Notifications', 'category', {
      type: Sequelize.ENUM(
        "FOLLOWED",
        "NEW_LISTING",
        "AUCTION_END",
        "AUCTION_WINNER",
        "AUCTION_OWNER",
        "NEW_ORDER"
      ),
      after: 'content'
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Notifications', 'category');
  }
}
