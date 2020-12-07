import mongo from "../mongo.js";

export default async function ({ root }) {
  const Items = mongo.collection("items");

  return await Items.find({
    name: RegExp(root, "i"),
    duplicate: false,
  })
    .limit(10)
    .toArray();
}
