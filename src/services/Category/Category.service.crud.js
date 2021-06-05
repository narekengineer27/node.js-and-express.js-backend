import models, { sequelize } from "../../../models";
import { transformToTree } from "../../tools/listing.transformToTree.js";
import seuqelize from "sequelize";

const Op = sequelize.Op;

async function read() {
  const categories = await models.Category.findAll({
    raw: true
  });
  const extract = categories.map(item => {
    return { value: item.id, label: item.name, parentId: item.parentId };
  });
  const result = transformToTree(extract);

  return result;
}

function getListings(CategoryId, ListingId = null, limit = null) {
  const categoryIdwhere = {
    CategoryId
  };
  const listingIdWhere = ListingId && {
    id: {
      [Op.ne]: ListingId
    }
  };

  const where = { ...categoryIdwhere, ...listingIdWhere };
  return models.Listing.findAll({
    limit,
    where,
    include: [
      { model: models.ListingFile },
      {
        model: models.Country,
        include: [
          {
            model: models.Currency
          }
        ]
      }
    ],
    order: [[models.ListingFile, "order", "ASC"]]
  }).then(result => {
    const listings = result.map((item, index) => {
      let formatted_address = "";
      if (item.Country.name)
        formatted_address +=
          formatted_address == ""
            ? item.Country.name
            : ", " + item.Country.name;

      let image = "";
      if (
        item.ListingFiles &&
        item.ListingFiles[0] &&
        item.ListingFiles[0].dataValues
      )
        image = item.ListingFiles[0].dataValues.url;

      return {
        id: item.id,
        UserId: item.UserId,
        title: item.title,
        pricePerUnit: item.pricePerUnit,
        unit: item.unit,
        isAuction: item.isAuction,
        status: item.status,
        formatted_address,
        Currency: item.Country.Currency,
        image
      };
    });
    return listings;
  });
}

function getAllListings(CategoryId) {
  return getListings(CategoryId);
}

function getSomeListingsExceptOne(CategoryId, ListingId) {
  return getListings(CategoryId, ListingId, 10);
}

module.exports = {
  read,
  getAllListings,
  getSomeListingsExceptOne
};
