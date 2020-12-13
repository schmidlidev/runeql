import mongo from "../mongo.js";
import config from "../config.js";
import { min } from "../utilities.js";

export default async ({ nameLike, qualifiedNameLike, slot, limit }) => {
  const Items = mongo.collection("items");

  // Required and default fields
  let query = {};

  // Optional query parameters
  if (nameLike) {
    query.name = RegExp(nameLike, "i");
  }
  if (qualifiedNameLike) {
    query.qualified_name = RegExp(qualifiedNameLike, "i");
  }
  if (slot) {
    query["equipment.slot"] = slot;
  }

  let result = Items.find(query);

  // Filtering parameters
  limit = min([limit, config.DEPTH_LIMIT]);
  result = result.limit(limit);

  return await result.toArray();
};
