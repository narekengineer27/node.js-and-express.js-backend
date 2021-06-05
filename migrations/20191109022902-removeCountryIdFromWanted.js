"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("Wanteds", "CountryId");
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.addColumn("Wanteds", "CountryId", {
      after: "ConditionId",
      type: Sequelize.INTEGER
    });
  }
};
