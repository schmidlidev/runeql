import weaponCategory from "./weaponCategory.js";

export default async (category) => {
  return (await weaponCategory({ name: category })).stances;
};
