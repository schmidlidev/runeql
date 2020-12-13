const config = {
  DEPTH_LIMIT: 50,
};

if (process.env.NODE_ENV === "development") {
  config.mongo_uri = "mongodb://localhost:27017/";
}
if (process.env.NODE_ENV === "production") {
  config.mongo_uri = process.env.MONGO_URI;
}

export default config;
