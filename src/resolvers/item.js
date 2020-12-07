import mongo from "../mongo.js";

export default async function ({ id }) {
  const Items = mongo.collection("items");

  return await Items.findOne({ id: id });
}
