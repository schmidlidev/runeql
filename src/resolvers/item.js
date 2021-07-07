import mongo from '../mongo.js';

export default ({ id, name, qualifiedName }) => {
  const Items = mongo.collection('items');

  const query = {};

  if (id) {
    query.id = id;
  }
  if (name) {
    query.name = name;
  }
  if (qualifiedName) {
    query.qualified_name = qualifiedName;
  }

  return Items.findOne(query);
};
