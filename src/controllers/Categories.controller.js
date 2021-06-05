import CategoryService from "../services/Category";
import api from "../tools/common";

function getAllListings(req, res, next) {
  CategoryService.getAllListings(req.params.CategoryId)
    .then(result => {
      api.ok(res, result);
    })
    .catch(e => {
      api.error(res, "BAD Request", 400);
    });
}

function getSomeListingsExceptOne(req, res, next) {
  CategoryService.getSomeListingsExceptOne(
    req.params.CategoryId,
    req.params.ListingId
  )
    .then(result => {
      api.ok(res, result);
    })
    .catch(e => {
      api.error(res, "BAD Request", 400);
    });
}

module.exports = {
  getAllListings,
  getSomeListingsExceptOne
};
