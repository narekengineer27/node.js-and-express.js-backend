import AuctionService from "../services/Auction";
import api from "../tools/common";

function bid(req, res, next) {
  AuctionService.bid({
    ListingId: req.params.ListingId,
    BidderId: req.UserId,
    price: req.body.price
  })
    .then(result => {
      if (result.status == false) {
        api.error(res, result.message, 400);
      } else {
        api.ok(res, result.data);
      }
    })
    .catch(e => {
      api.error(res, e.message, 400);
    });
}

async function getListingInfo(req, res, next) {
  try {
    const info = await AuctionService.getListingInfo(req.params.ListingId);
    api.ok(res, info);
  } catch (e) {
    api.error(res, e.message, 500);
  }
}

module.exports = {
  bid,
  getListingInfo,
};
