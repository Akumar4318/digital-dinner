const pool = require("../Database/postgreSQL");

const findUserByPhone = async (phone) => {
  const res = await pool.query("SELECT * FROM users WHERE phone_number = $1", [phone]);
  return res.rows[0];
};

const createUser = async (name, phone) => {
  const res = await pool.query(
    "INSERT INTO users (name, phone_number) VALUES ($1, $2) RETURNING *",
    [name, phone]
  );
  return res.rows[0];
};

module.exports = { findUserByPhone, createUser };
