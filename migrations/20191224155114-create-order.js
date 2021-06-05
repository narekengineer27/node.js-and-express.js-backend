'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      BuyerId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Users",
          key: "id"
        },
        onDelete: "cascade",
        onUpdate: "cascade"
      },
      SellerId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Users",
          key: "id"
        },
        onDelete: "cascade",
        onUpdate: "cascade"
      },
      ListingId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Listings",
          key: "id"
        },
        onDelete: "cascade",
        onUpdate: "cascade"
      },
      status: {
        type: Sequelize.ENUM("Active", "Completed", "Cancelled")
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
    return queryInterface.dropTable('orders');
  }
};