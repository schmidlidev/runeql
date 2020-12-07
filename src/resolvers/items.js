import mongo from "../mongo.js";

export default async function ({ duplicate, nameLike, limit }) {
  const Items = mongo.collection("items");

  // Required and default fields
  let query = {
    duplicate: duplicate,
  };

  // Optional query parameters
  if (nameLike) {
    query.name = RegExp(nameLike, "i");
  }

  let result = Items.find(query);

  // Optional filtering parameters
  if (limit) {
    result = result.limit(limit);
  }

  return await result.toArray();
}