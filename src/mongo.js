import mongodb from "mongodb";

import config from "./config.js";

console.log("Creating MongoDB Client");
export const mongoClient = await mongodb.MongoClient.connect(config.mongo_uri, {
  useUnifiedTopology: true,
});

mongodb.Logger.setLevel("info");

const mongo = mongoClient.db("osrs");

export default mongo;
