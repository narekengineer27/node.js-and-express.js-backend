import models, { sequelize } from "../../../models";

function getHighestPrice(ListingId) {
  return models.Auction.findOne({
    attributes: [
      "id",
      "ListingId",
      "BidderId",
      [sequelize.fn("max", sequelize.col("price")), "maxPrice"]
    ],
    where: {
      ListingId
    },
    raw: true
  }).then(result => {
    if (result.maxPrice == null) return 0;
    return result.maxPrice;
  });
}

async function bid(feeds) {
  const highest = await getHighestPrice(feeds.ListingId);
  if (feeds.price <= highest) {
    return {
      status: false,
      message: `can not bid on Listing with a lower price`
    };
  }

  const listing = await models.Listing.findByPk(feeds.ListingId);
  await listing.update({
    pricePerUnit: feeds.price,
    status: 'Active'
  });
  return models.Auction.build(feeds)
    .save()
    .then(result => {
      return {
        status: true,
        data: result
      };
    });
}

function getHighestBid(ListingId) {
  return models.Auction.findOne({
    attributes: [
      "id",
      "ListingId",
      "BidderId",
      [sequelize.fn("max", sequelize.col("price")), "price"]
    ],
    where: {
      ListingId
    }
  })
    .then(result => result)
    .catch(e => console.log(e));
}

function getNumberOfBids(ListingId) {
  return models.Auction.count({
    where: {
      ListingId
    }
  }).then(result => result);
}

function getUserBid(UserId, ListingId) {
  return models.Auction.findOne({
    where: {
      ListingId,
      BidderId: UserId
    }
  })
    .then(auction => auction)
    .catch(e => console.log(e));
}

function getInfoForAuction(ListingId) {
  return models.Listing.findByPk(ListingId, {
    include: [
      {
        model: models.Country,
        include: [{ model: models.Currency }]
      }
    ]
  }).then(listing => {
    return {
      auctionInterval: listing.auctionInterval,
      auctionDateTime: listing.auctionDateTime,
      currency: listing.Country.Currency.code
    };
  });
}

async function getListingInfo(ListingId) {
  const highestPrice = await getHighestPrice(ListingId);
  const count = await getNumberOfBids(ListingId);
  const listing = await getInfoForAuction(ListingId);
  const bidders = await getBidders(ListingId);
  return {
    highestPrice,
    count,
    listing,
    bidders
  };
}

async function getBidders(ListingId) {
  let bidders = await models.Auction.findAll({
    where: {
      ListingId
    },
    order: [['id', 'ASC']],
    include: [
      {
        model: models.User,
        attributes: ["id", "first_name", "last_name"],
        include: [
          {
            model: models.Company,
            include: [
              {
                model: models.Country,
                include: [{ model: models.Currency }]
              }
            ]
          }
        ]
      }
    ]
  });
  return bidders;
}

module.exports = {
  bid,
  getListingInfo,
  getBidders
};
