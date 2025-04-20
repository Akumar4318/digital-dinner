const express=require('express')
const router=express.Router();
const {createCategory,getAllCategories,getItemsByCategory}=require('../Controllers/Category')




router.post('/createcategory',createCategory)
router.get('/getallcategory',getAllCategories)

module.exports=router