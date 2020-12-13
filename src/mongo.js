import mongodb from "mongodb";

import config from "./config.js";

console.log("Creating MongoDB Client");
const client = await mongodb.MongoClient.connect(config.mongo_uri, {
  useUnifiedTopology: true,
});

const mongo = client.db("osrs");

export default mongo;
