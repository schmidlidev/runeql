import mongo from "../mongo.js";

export default async function () {
  const Items = mongo.collection("items");

  return await Items.find({}).toArray();
}
