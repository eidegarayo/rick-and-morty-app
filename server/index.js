/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
const path = require('path');
require('dotenv').config();

const dbConfig = require('./config/dbConfig');
const app = require('./app');

const { PORT, URL_DB, URL_DB_TEST, NODE_ENV } = process.env;
const MONGODB_URI = NODE_ENV === 'test' ? URL_DB_TEST : URL_DB;

global.__BASE = path.join(__dirname, 'server');

dbConfig.openUri(MONGODB_URI)
  .then((db) => console.log(`Connected to DB=${db.name} on HOST=${db.host}...`))
  .catch((err) => {
    console.error('Connection error', err);
    process.exit();
  });

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
