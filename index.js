const path = require('path');

require('dotenv').config();

const { PORT, URL_DB, URL_DB_TEST, NODE_ENV } = process.env;
const MONGODB_URI = NODE_ENV === 'test' ? URL_DB_TEST : URL_DB;

global.__BASE = path.join(__dirname, 'server');

const dbConfig = require('./server/config/dbConfig');
const app = require('./server/app');

dbConfig.openUri(MONGODB_URI)
  .then((db) => console.log(`Connected to DB=${db.name} on HOST=${db.host}...`))
  .catch((err) => {
    console.error('Connection error', err);
    process.exit();
  });

app.listen(PORT, () => {
  console.log(`Server listening on PORT=${PORT}...`);
});
