import mongo from "../mongo.js";

export default async ({ id, name, qualifiedName }) => {
  const Items = mongo.collection("items");

  let query = {};

  if (id) {
    query.id = id;
  }
  if (name) {
    query.name = name;
  }
  if (qualifiedName) {
    query.qualified_name = qualifiedName;
  }

  return await Items.findOne(query);
};
