import mongo from "../mongo.js";

export default async function ({ nameLike, limit }) {
  const Items = mongo.collection("items");

  let query = {};

  if (nameLike) {
    query.name = RegExp(nameLike, "i");
  }

  let result = Items.find(query);

  if (limit) {
    result = result.limit(limit);
  }

  return result.toArray();
}
