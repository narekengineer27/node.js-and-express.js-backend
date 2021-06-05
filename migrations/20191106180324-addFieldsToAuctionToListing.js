"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.addColumn(
          "Listings",
          "isAuction",
          {
            after: "pricePerUnit",
            type: Sequelize.BOOLEAN
          },
          { transaction: t }
        ),
        queryInterface.addColumn(
          "Listings",
          "auctionInterval",
          {
            after: "pricePerUnit",
            type: Sequelize.FLOAT
          },
          { transaction: t }
        ),
        queryInterface.addColumn(
          "Listings",
          "auctionDateTime",
          {
            after: "pricePerUnit",
            type: Sequelize.DATE
          },
          { transaction: t }
        )
      ]);
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.removeColumn("Listings", "isAuction", {
          transaction: t
        }),
        queryInterface.removeColumn("Listings", "auctionInterval", {
          transaction: t
        }),
        queryInterface.removeColumn("Listings", "auctionDateTime", {
          transaction: t
        })
      ]);
    });
  }
};
