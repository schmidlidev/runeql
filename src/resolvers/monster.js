import mongo from "../mongo.js";

export default async ({ id }) => {
  const Monsters = mongo.collection("monsters");

  return await Monsters.findOne({ id: id });
};
