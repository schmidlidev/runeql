import express from "express";
import { graphqlHTTP } from "express-graphql";
import { loadSchema } from "@graphql-tools/load";
import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader";

import nameLike from "./resolvers/nameLike.js";
import item from "./resolvers/item.js";
import items from "./resolvers/items.js";

const schema = await loadSchema("./src/schema/schema.gql", {
  loaders: [new GraphQLFileLoader()],
});

// Resolvers
const root = {
  item: item,
  items: items,
  nameLike: nameLike,
};

const app = express();
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
