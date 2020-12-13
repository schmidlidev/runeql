import mongo from "../mongo.js";

export default async (category) => {
  const WeaponCategories = mongo.collection("weaponCategories");

  return (await WeaponCategories.findOne({ name: category })).stances;
};
