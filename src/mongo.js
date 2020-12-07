import mongodb from "mongodb";

console.log("Creating MongoDB Client");
const client = await mongodb.MongoClient.connect("mongodb://localhost:27017/", {
  useUnifiedTopology: true,
});

const mongo = client.db("osrs");

export default mongo;
