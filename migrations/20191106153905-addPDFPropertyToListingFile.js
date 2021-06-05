"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn("ListingFiles", "type", {
      type: Sequelize.ENUM("IMAGE", "VIDEO", "PDF")
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn("ListingFiles", "type", {
      type: Sequelize.ENUM("IMAGE", "VIDEO")
    });
  }
};
