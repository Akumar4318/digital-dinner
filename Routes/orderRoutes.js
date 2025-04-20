const express = require("express");
const router = express.Router();

const {handleCreateOrder,handleGetOrdersByPhone}=require('../Controllers/orderController')

router.post('/orders',handleCreateOrder)
router.get('/orders/:phone',handleGetOrdersByPhone)

module.exports = router;
