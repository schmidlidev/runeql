import express from "express";
import { graphqlHTTP } from "express-graphql";
import { loadSchema } from "@graphql-tools/load";
import { addResolversToSchema } from "@graphql-tools/schema";
import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader";
import cors from "cors";

import item from "./resolvers/item.js";
import items from "./resolvers/items.js";
import price from "./resolvers/price.js";

const schema = await loadSchema("./src/schema/Schema.gql", {
  loaders: [new GraphQLFileLoader()],
});

// Resolvers
const root = {
  item: item,
  items: items,
};

const resolvers = {
  Item: {
    price(parent) {
      return price(parent);
    },
  },
};
const schemaWithResolvers = addResolversToSchema({ schema, resolvers });

const app = express();
app.use(cors());
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schemaWithResolvers,
    rootValue: root,
    graphiql: true,
  })
);
app.listen(4000, () => {
  console.log("Running a GraphQL API server at http://localhost:4000/graphql");
});
