import depthLimit from "graphql-depth-limit";
import express from "express";
import { graphqlHTTP } from "express-graphql";
import { loadSchema } from "@graphql-tools/load";
import { addResolversToSchema } from "@graphql-tools/schema";
import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader";
import cors from "cors";
import http from "http";
import https from "https";
import fs from "fs";

import config from "./config.js";
import item from "./resolvers/item.js";
import items from "./resolvers/items.js";
import { mongoClient } from "./mongo.js";
import monster from "./resolvers/monster.js";
import monsters from "./resolvers/monsters.js";
import price from "./resolvers/price.js";
import stances from "./resolvers/stances.js";
import weaponCategory from "./resolvers/weaponCategory.js";

// Schema
const schema = await loadSchema("./src/schema/Schema.gql", {
  loaders: [new GraphQLFileLoader()],
});

// Resolvers
const root = {
  item: item,
  items: items,
  monster: monster,
  monsters: monsters,
  weaponCategory: weaponCategory,
};

const resolvers = {
  Item: {
    price(parent) {
      if (parent.tradeable_ge) return price(parent.id);
    },
  },
  WeaponCategory: {
    stances(parent) {
      return stances(parent.name);
    },
  },
  ItemDrop: {
    item(parent) {
      return item(parent);
    },
  },
};
const schemaWithResolvers = addResolversToSchema({ schema, resolvers });

// Express config
const app = express();
app.use(cors());
app.use(
  "/",
  graphqlHTTP({
    schema: schemaWithResolvers,
    rootValue: root,
    validationRules: [depthLimit(10)],
    graphiql: true,
  })
);

// HTTP
const httpServer = http.createServer(app);
httpServer.listen(config.port, () => {
  console.log(`HTTP Server running on port ${config.port}`);
});

// HTTPS
if (process.env.NODE_ENV === "production") {
  const httpsServer = https.createServer(
    {
      key: fs.readFileSync("/etc/letsencrypt/live/api.runeql.com/privkey.pem"),
      cert: fs.readFileSync(
        "/etc/letsencrypt/live/api.runeql.com/fullchain.pem"
      ),
    },
    app
  );

  httpsServer.listen(443, () => {
    console.log("HTTPS Server running on port 443");
  });
}

// Close Mongo
process.on("SIGINT", () => {
  console.info("Interrupted");
  mongoClient.close();
  process.exit(0);
});
