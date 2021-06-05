import models from "../../../models";

function getAll() {
  return models.Currency.findAll({
    attributes: {
      exclude: ["rate", "createdAt", "updatedAt"]
    }
  });
}

module.exports = {
  getAll
};
