import mongo from '../mongo.js';

export default ({ name }) => {
  const WeaponCategories = mongo.collection('weaponCategories');

  return WeaponCategories.findOne({ name });
};
