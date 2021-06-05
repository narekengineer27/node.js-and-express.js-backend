'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Invoices', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      invoiceNumber: {
        type: Sequelize.STRING
      },
      OrderId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Orders",
          key: "id"
        },
        onDelete: "cascade",
        onUpdate: "cascade"
      },
      fee: {
        type: Sequelize.FLOAT,
      },
      UserId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Users",
          key: "id"
        },
        onDelete: "cascade",
        onUpdate: "cascade"
      },
      userRole: {
        type: Sequelize.ENUM("Seller", "Buyer")
      },
      dueDate: {
        type: Sequelize.DATE
      },
      status: {
        type: Sequelize.ENUM("Paid", "Unpiad", "Cancelled"),
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
    return queryInterface.dropTable('Invoices');
  }
};