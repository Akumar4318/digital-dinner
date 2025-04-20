const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  host:"localhost",
  user:"postgres",
  port:process.env.PORT1,
  password:process.env.DATABASE_PASSWORD,
  database:process.env.DATABASE_NAME
});

module.exports = pool;
