"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Wanteds", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      UserId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Users",
          key: "id"
        }
      },
      CategoryId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Categories",
          key: "id"
        }
      },
      ConditionId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Conditions",
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
      notification: {
        type: Sequelize.ENUM("INSTANT", "ONCE_A_DAY", "ONCE_A_WEEK", "NO")
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
    return queryInterface.dropTable("Wanteds");
  }
};
