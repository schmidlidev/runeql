import mongo from '../mongo.js';
import { amountLimit } from '../utilities.js';

export default ({
  nameLike,
  qualifiedNameLike,
  members,
  attribute,
  slayer,
  slayerCategory,
  limit,
}) => {
  const Monsters = mongo.collection('monsters');

  // Required and default fields
  const query = {};

  // Optional query parameters
  if (nameLike) {
    query.name = RegExp(nameLike, 'i');
  }
  if (qualifiedNameLike) {
    query.qualified_name = RegExp(qualifiedNameLike, 'i');
  }
  if (members !== undefined) {
    query.members = members;
  }
  if (attribute) {
    query.attributes = attribute;
  }
  if (slayer !== undefined) {
    if (slayer) {
      query.slayer = { $ne: null };
    } else {
      query.slayer = null;
    }
  }
  if (slayerCategory) {
    query['slayer.categories'] = slayerCategory;
  }

  let result = Monsters.find(query);

  // Filtering parameters
  result = result.limit(amountLimit(limit));

  return result.toArray();
};
