import models from "../../../models";

async function read() {
  const pricingTerms = await models.PricingTerm.findAll({
    raw: true
  });
  const mapping = pricingTerms.map(item => {
    return { value: item.id, label: item.name };
  });
  return mapping;
}

module.exports = {
  read
};
