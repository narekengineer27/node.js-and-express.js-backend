import models from "../../../models";
import { transformToTree } from "../../tools/listing.transformToTree.js";

async function read() {
  const conditions = await models.Condition.findAll({
    raw: true
  });
  const extract = conditions.map(item => {
    return { value: item.id, label: item.name, parentId: item.parentId };
  });
  const result = transformToTree(extract);
  return result;
}

module.exports = {
  read
};
