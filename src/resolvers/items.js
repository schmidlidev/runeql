import mongo from '../mongo.js';
import { amountLimit } from '../utilities.js';

export default ({
  nameLike,
  qualifiedNameLike,
  slot,
  members,
  quest,
  stackable,
  tradeable,
  tradeableGe,
  equipable,
  limit,
}) => {
  const Items = mongo.collection('items');

  // Required and default fields
  const query = {};

  // Optional query parameters
  if (nameLike) {
    query.name = RegExp(nameLike, 'i');
  }
  if (qualifiedNameLike) {
    query.qualified_name = RegExp(qualifiedNameLike, 'i');
  }
  if (slot) {
    query['equipment.slot'] = slot;
  }
  if (members !== undefined) {
    query.members = members;
  }
  if (quest !== undefined) {
    query.quest = quest;
  }
  if (stackable !== undefined) {
    query.stackable = stackable;
  }
  if (tradeable !== undefined) {
    query.tradeable = tradeable;
  }
  if (tradeableGe !== undefined) {
    query.tradeable_ge = tradeableGe;
  }
  if (equipable !== undefined) {
    query.equipable = equipable;
  }

  let result = Items.find(query);

  // Filtering parameters
  result = result.limit(amountLimit(limit));

  return result.toArray();
};
