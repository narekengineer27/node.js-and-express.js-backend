'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.addConstraint('Contacts', ['SellerId'], {
          type: 'FOREIGN KEY',
          name: 'fk_contact_seller_id',
          references: {
            table: 'Users',
            field: 'id'
          },
          onDelete: 'cascade',
          onUpdate: 'cascade'
        }, { transaction: t }),
        queryInterface.addConstraint('Contacts', ['CustomerId'], {
          type: 'FOREIGN KEY',
          name: 'fk_contact_customer_id',
          references: {
            table: 'Users',
            field: 'id'
          },
          onDelete: 'cascade',
          onUpdate: 'cascade'
        }, { transaction: t }),
        queryInterface.addConstraint('Contacts', ['ListingId'], {
          type: 'FOREIGN KEY',
          name: 'fk_contact_listing_id',
          references: {
            table: 'Listings',
            field: 'id'
          },
          onDelete: 'cascade',
          onUpdate: 'cascade'
        }, { transaction: t })
      ]);
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.removeConstraint('Contacts', 'fk_contact_seller_id', { transaction: t }),
        queryInterface.removeConstraint('Contacts', 'fk_contact_customer_id', { transaction: t }),
        queryInterface.removeConstraint('Contacts', 'fk_contact_listing_id', { transaction: t })
      ]);
    })

  }
};
