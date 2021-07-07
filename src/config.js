const config = {
  AMOUNT_LIMIT: 50,
};

if (process.env.NODE_ENV === 'development') {
  config.port = 4000;
  config.mongo_uri = 'mongodb://localhost:27017/';
}
if (process.env.NODE_ENV === 'production') {
  config.port = 80;
  config.mongo_uri = process.env.MONGO_URI;
}

export default config;
