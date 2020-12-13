import mongo from "../mongo.js";

export default async ({ name }) => {
  const WeaponCategories = mongo.collection("weaponCategories");

  return await WeaponCategories.findOne({ name: name });
};
