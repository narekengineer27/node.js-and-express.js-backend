'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.renameColumn('Companies', 'countryId', 'CountryId', { transaction: t }),
        queryInterface.renameColumn('ListingFiles', 'listingId', 'ListingId', { transaction: t }),
        queryInterface.renameColumn('Listings', 'categoryId', 'CategoryId', { transaction: t }),
        queryInterface.renameColumn('Listings', 'conditionId', 'ConditionId', { transaction: t }),
        queryInterface.renameColumn('Listings', 'productCodeId', 'ProductCodeId', { transaction: t }),
        queryInterface.renameColumn('Listings', 'packagingId', 'PackagingId', { transaction: t }),
        queryInterface.renameColumn('Listings', 'pricingTermId', 'PricingTermId', { transaction: t }),
        queryInterface.renameColumn('Listings', 'countryId', 'CountryId', { transaction: t })
      ]);
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.renameColumn('Companies', 'CountryId', 'countryId', { transaction: t }),
        queryInterface.renameColumn('ListingFiles', 'ListingId', 'listingId', { transaction: t }),
        queryInterface.renameColumn('Listings', 'CategoryId', 'categoryId', { transaction: t }),
        queryInterface.renameColumn('Listings', 'ConditionId', 'conditionId', { transaction: t }),
        queryInterface.renameColumn('Listings', 'ProductCodeId', 'productCodeId', { transaction: t }),
        queryInterface.renameColumn('Listings', 'PackagingId', 'packagingId', { transaction: t }),
        queryInterface.renameColumn('Listings', 'PricingTermId', 'pricingTermId', { transaction: t }),
        queryInterface.renameColumn('Listings', 'CountryId', 'countryId', { transaction: t })
      ]);
    })
  }
};
