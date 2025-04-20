const pool = require("../Database/postgreSQL");

const createOrder = async (userId, items, totalAmount) => {
  const res = await pool.query(
    "INSERT INTO orders (user_id, items, total_amount) VALUES ($1, $2, $3) RETURNING *",
    [userId, items, totalAmount]
  );
  return res.rows[0];
};

const getOrdersByUserId = async (userId) => {
  const res = await pool.query("SELECT * FROM orders WHERE user_id = $1", [userId]);
  return res.rows;
};

module.exports = { createOrder, getOrdersByUserId };
