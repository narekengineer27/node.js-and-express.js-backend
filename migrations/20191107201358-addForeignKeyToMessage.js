"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.addConstraint(
          "Messages",
          ["Sender"],
          {
            type: "FOREIGN KEY",
            name: "fk_messages_sender_id",
            references: {
              table: "Users",
              field: "id"
            },
            onDelete: "cascade",
            onUpdate: "cascade"
          },
          { transaction: t }
        ),
        queryInterface.addConstraint(
          "Messages",
          ["Recipient"],
          {
            type: "FOREIGN KEY",
            name: "fk_messages_recipient_id",
            references: {
              table: "Users",
              field: "id"
            },
            onDelete: "cascade",
            onUpdate: "cascade"
          },
          { transaction: t }
        )
      ]);
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.removeConstraint("Messages", "fk_messages_sender_id", {
          transaction: t
        }),
        queryInterface.removeConstraint(
          "Messages",
          "fk_messages_recipient_id",
          { transaction: t }
        )
      ]);
    });
  }
};
