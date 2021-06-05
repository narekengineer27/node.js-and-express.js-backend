'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Listings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Users",
          key: "id"
        }
      },
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      category: {
        type: Sequelize.STRING
      },
      condition: {
        type: Sequelize.STRING
      },
      productCode: {
        type: Sequelize.STRING
      },
      packaging: {
        type: Sequelize.STRING
      },
      unit: {
        type: Sequelize.STRING
      },
      supply: {
        type: Sequelize.STRING
      },
      pricingTerm: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      country: {
        type: Sequelize.STRING
      },
      zipcode: {
        type: Sequelize.STRING
      },
      geography: {
        type: Sequelize.STRING
      },
      users: {
        type: Sequelize.STRING
      },
      quantity: {
        type: Sequelize.INTEGER
      },
      pricePerUnit: {
        type: Sequelize.INTEGER
      },
      video: {
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.STRING
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
    return queryInterface.dropTable('Listings');
  }
};