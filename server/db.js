const { Pool } = require('pg');

const pool = new Pool({
  user: 'perntodo',
  password: 'perntodo',
  host: 'localhost',
  port: 5432,
  database: 'perntodo',
});

module.exports = pool;
