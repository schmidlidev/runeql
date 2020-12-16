import mongo from "../mongo.js";

export default async ({ id }) => {
  const Items = mongo.collection("items");

  let item = await Items.findOne({ id: id });
  if (item === null) console.log(id);
  return item;
};
