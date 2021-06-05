'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Messages', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ListingId: {
        type: Sequelize.INTEGER
      },
      Sender: {
        type: Sequelize.INTEGER
      },
      Recipient: {
        type: Sequelize.INTEGER
      },
      content: {
        type: Sequelize.TEXT
      },
      isRead: {
        type: Sequelize.BOOLEAN
      },
      time: {
        type: Sequelize.DATE
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
    return queryInterface.dropTable('Messages');
  }
};