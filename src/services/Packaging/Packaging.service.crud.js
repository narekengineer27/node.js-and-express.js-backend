import models from "../../../models";

async function read() {
  const packagings = await models.Packaging.findAll({
    raw: true
  });
  const mapping = packagings.map(item => {
    return { value: item.id, label: item.name };
  });

  return mapping;
}

module.exports = {
  read
};
