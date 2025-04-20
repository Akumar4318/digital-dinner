const express=require('express')
const router=express.Router();
const {createCategory}=require('../Controllers/Category')
const {createItem,getAllItems,getItemsByCategory}=require('../Controllers/Item')


router.post('/createitem',createItem)
router.get('/items',getAllItems)
router.get('/items/category/:categoryId',getItemsByCategory)
module.exports=router