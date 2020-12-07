import mongo from "../mongo.js";

export default async function ({ nameLike, limit }) {
  const Items = mongo.collection("items");

  let result;

  if (nameLike) {
    result = await Items.find({
      name: RegExp(nameLike, "i"),
      duplicate: false,
    });
  } else {
    result = await Items.find({});
  }

  if (limit) {
    result = result.limit(limit);
  }

  return result.toArray();
}
