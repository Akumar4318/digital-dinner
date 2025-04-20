const mongoose=require('mongoose')

const Category=require('../Models/category')
const Item=require('../Models/item')
exports.createCategory=async(req,res)=>{

    try {
        
        const{name}=req.body;
        if(!name){
            return res.status(500).json({
                success: false, message: "All fields are required" 
            })
        }

        const categoryDetails= await Category.create({
            name:name
        })


        res.status(200).json({
            success:true,
            message:"category created successfully"
        })

    } catch (error) {
        console.error("Failed to create category",error)
        return res.status(500).json({
			success: true,
			message: error.message,
		});
	
    }
}


//ANCHOR - for fetching all cateogry

exports.getAllCategories = async (req, res) => {
    try {
      const categories = await Category.find();
  
      res.status(200).json({
        success: true,
        count: categories.length,
        data: categories,
      });
    } catch (error) {
      console.error("Error fetching categories:", error);
      res.status(500).json({
        success: false,
        message: "Failed to fetch categories. Server error.",
      });
    }
  };

