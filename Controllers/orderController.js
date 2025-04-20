const { findUserByPhone, createUser } = require("../Models/User");
const { createOrder, getOrdersByUserId } = require("../Models/Order");

const handleCreateOrder = async (req, res) => {
    try {
      const { name, phone, items, totalAmount } = req.body;
      if (!Array.isArray(items)) {
        return res.status(400).json({ message: '`items` must be an array!' });
      }
  
      let user = await findUserByPhone(phone);
  
      if (!user) {
        user = await createUser(name, phone);
      }
  
      const order = await createOrder(user.id, JSON.stringify(items), totalAmount);
  
      res.status(201).json({ message: 'Order created successfully', order });
    } catch (error) {
      console.error('Error creating order:', error);
      res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
  };
  
  const handleGetOrdersByPhone = async (req, res) => {
    try {
      const { phone } = req.params;
      const user = await findUserByPhone(phone);
  
      if (!user) return res.status(404).json({ message: 'User not found' });
  
      const orders = await getOrdersByUserId(user.id);
  
      res.status(200).json({ user, orders });
    } catch (error) {
      console.error('Error fetching orders:', error);
      res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
  };
  
  module.exports = { handleCreateOrder, handleGetOrdersByPhone };
  