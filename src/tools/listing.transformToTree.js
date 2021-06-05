import _ from "lodash";

function transformToTree(arr) {
  var nodes = {};
  return arr.filter(function(obj) {
    var value = obj["value"],
      parentId = obj["parentId"];

    nodes[value] = _.defaults(obj, nodes[value], { items: [] });
    parentId &&
      (nodes[parentId] = nodes[parentId] || { items: [] })["items"].push(obj);

    return !parentId;
  });
}

module.exports = {
  transformToTree
};
