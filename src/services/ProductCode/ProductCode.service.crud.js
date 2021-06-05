import models from "../../../models";
import { transformToTree } from "../../tools/listing.transformToTree.js";

async function read() {
  const productCodes = await models.ProductCode.findAll({
    raw: true
  });
  const extract = productCodes.map(item => {
    return {
      value: item.id,
      label: item.code
        ? `${item.code} - ${item.description}`
        : item.description,
      parentId: item.parentId
    };
  });
  const result = transformToTree(extract);
  return result;
}

module.exports = {
  read
};
