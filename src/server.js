import express from "express";
import { graphqlHTTP } from "express-graphql";
import { loadSchema } from "@graphql-tools/load";
import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader";
import mongodb from "mongodb";

const mongo = await mongodb.MongoClient.connect("mongodb://localhost:27017/");
const Items = await mongo.db("osrs").collection("items");

// Construct a schema, using GraphQL schema language
const schema = await loadSchema("./src/schema/schema.gql", {
  loaders: [new GraphQLFileLoader()],
});

// The root provides a resolver function for each API endpoint
var root = {
  items: async () => {
    return await Items.find({}).toArray();
  },
  item: async ({ id }) => {
    return await Items.findOne({ id: id });
  },
  startsWith: async ({ prefix }) => {
    return await Items.find({
      name: RegExp(prefix, "i"),
      duplicate: false,
    })
      .limit(10)
      .toArray();
  },
};

var app = express();
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);
app.listen(4000, () => {
  console.log("Running a GraphQL API server at http://localhost:4000/graphql");
});
