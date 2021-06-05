import { listingFileUpload } from "../tools/listingFileUploader";
import ListingService from "../services/Listings";
import CurrencyService from "../services/Currency";
import api from "../tools/common";

async function listingProperties(req, res, next) {
  const properties = await ListingService.getListingProperties(req.UserId);
  api.ok(res, properties, 200);
}

async function addListing(req, res, next) {
  listingFileUpload(req, res, async function (uploadError) {
    if (uploadError) {
      return api.error(res, uploadError, 400);
    } else {
      req.body.files = req.files;
      const result = await ListingService.addListing(req.UserId, req.body);
      if (result.success) {
        return api.ok(res, result.data, 201);
      } else {
        return api.error(res, result.message, 422);
      }
    }
  });
}

function updateListing(req, res, next) {
  listingFileUpload(req, res, async function (uploadError) {
    if (uploadError) {
      return api.error(res, uploadError, 400);
    } else {
      req.body.files = req.files;
      try {
        const result = await ListingService.updateListing(
          req.UserId,
          req.params.ListingId,
          req.body
        );
        if (result.success) {
          return api.ok(res, result.data, 200);
        } else {
          return api.error(res, result.message, 422);
        }
      } catch (e) {
        return api.error(res, e.message, 500);
      }
    }
  });
}

async function getListings(req, res, next) {
  try {
    const countryIds = req.body.country && [...req.body.country];
    const categoryIds = req.body.category && [...req.body.category];
    const conditionIds = req.body.condition && [...req.body.condition];
    let userIds = [];
    if (req.body.users && req.body.users.length > 0) {
      userIds = [...req.body.users];
    }
    const filter = {
      countryIds,
      categoryIds,
      conditionIds,
      userIds
    };
    ListingService.getListings(req.UserId, filter).then(result => {
      api.ok(res, result);
    });
  } catch (e) {
    api.error(res, e.message, 500);
  }
}

function getDetails(req, res, next) {
  ListingService.getDetails(req.params.ListingId).then(async listing => {
    if (listing == null) api.error(res, "Listing does not exist", 404);
    else {
      const isWish = await ListingService.isWish(req.UserId, req.params.ListingId);
      const isOrdered = await ListingService.isOrdered(req.UserId, req.params.ListingId);
      listing.dataValues = { ...listing.dataValues, isWish };
      listing.dataValues = { ...listing.dataValues, isOrdered };
      api.ok(res, listing);
    }
  });
}

function getAllCurrencies(req, res, next) {
  CurrencyService.getAll()
    .then(result => {
      api.ok(res, result);
    })
    .catch(e => {
      api.error(res, "something went wrong.", 500);
    });
}

function getAllUnits(req, res, next) {
  const weightUnits = [
    {
      unit: "lb",
      rate: 0.45359273
    },
    {
      unit: "mt",
      rate: 1000
    },
    {
      unit: "kg",
      rate: 1
    }
  ];
  api.ok(res, weightUnits);
}

function getAllSearchResult(req, res, next) {
  ListingService.getAllSearchResult(req.UserId, req.query.content)
    .then(result => {
      api.ok(res, result);
    })
    .catch(e => {
      api.error(res, "something went wrong.", 500);
    });
}

function getSearchResult(req, res, next) {
  ListingService.getSearchResult(req.UserId, req.query.content)
    .then(result => {
      api.ok(res, result);
    })
    .catch(e => {
      api.error(res, "something went wrong.", 500);
    });
}

function wishlist(req, res, next) {
  ListingService.wishlist(req.UserId, req.params.ListingId)
    .then(result => {
      api.ok(res, result);
    })
    .catch(e => {
      api.error(res, "something went wrong.", 500);
    });
}

module.exports = {
  listingProperties,
  getListings,
  addListing,
  updateListing,
  getDetails,
  getAllCurrencies,
  getAllUnits,
  getAllSearchResult,
  getSearchResult,
  wishlist
};
