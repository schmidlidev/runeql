import mongo from "../mongo.js";

export default async ({ name }) => {
  console.log(name);
  const WeaponCategories = mongo.collection("weaponCategories");

  return await WeaponCategories.findOne({ name: name });
};
