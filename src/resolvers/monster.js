import mongo from "../mongo.js";

export default async ({ id, name, qualifiedName }) => {
  const Monsters = mongo.collection("monsters");

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

  return await Monsters.findOne(query);
};
