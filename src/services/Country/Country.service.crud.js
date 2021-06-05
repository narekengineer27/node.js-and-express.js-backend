import models from "../../../models";

async function read() {
  const countries = await models.Country.findAll({
    raw: true
  });
  const mapping = countries.map(item => {
    return { value: item.id, label: item.name };
  });
  return mapping;
}

module.exports = {
  read
};
