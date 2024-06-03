// PG database client/connection setup
const { Pool } = require('pg');

/* const dbParams = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
}; */

const db = new Pool({
  user: 'labber1',
  host: 'localhost',
  database: 'finals',
  password: 'labber1',
  port: 5432
});

db.connect();

module.exports = db;
