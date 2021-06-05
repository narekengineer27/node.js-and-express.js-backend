'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('WantedCountries', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      WantedId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Wanteds",
          key: "id"
        }
      },
      CountryId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Countries",
          key: "id"
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('WantedCountries');
  }
};