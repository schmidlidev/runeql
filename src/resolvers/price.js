import fetch from 'node-fetch';
import mongo from '../mongo.js';

const fetchPrice = async (id) => {
  const response = await fetch(
    `https://api.weirdgloop.org/exchange/history/osrs/latest?id=${id}`,
    { 'User-Agent': 'runeql' },
  );
  const data = await response.json();

  return data[id];
};

const Prices = mongo.collection('pricesCache');

const cachePrice = async (id, { price }) => {
  Prices.updateOne(
    { id },
    { $set: { price, timestamp: Date.now() } },
    { upsert: true },
  );
};

export default async (id) => {
  // From cache
  const cachedItem = await Prices.findOne({ id });
  if (cachedItem === null || Date.now() - cachedItem.timestamp > 36000000) {
    // Cache miss or Cache invalidation
    const freshItem = await fetchPrice(id);
    cachePrice(id, freshItem);

    return freshItem.price;
  }
  // Cache hit
  return cachedItem.price;
};
