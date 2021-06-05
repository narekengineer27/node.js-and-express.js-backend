'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Transactions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      InvoiceId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Invoices",
          key: "id"
        },
        onDelete: "cascade",
        onUpdate: "cascade"
      },
      amount: {
        type: Sequelize.FLOAT
      },
      currency: {
        type: Sequelize.STRING
      },
      paymentMethod: {
        type: Sequelize.STRING
      },
      methodId: {
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.ENUM("Pay", "Refund")
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
    return queryInterface.dropTable('Transactions');
  }
};