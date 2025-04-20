const Item=require('../Models/item')


//ANCHOR - FOR CREATEING ITEMS

exports.createItem=async(req,res)=>{
try {
    
    
    const {name,description,category,price,imageUrl,isAvailable}=req.body;

    // validation for all fields

    if(!name || ! description || !category || !price || !isAvailable || !imageUrl){

        return res.status(400).json({
            success:false,
            message:"All required fields must be provided."
        })
    }

    // for creating the items

    const newItem= new Item({
        name,description,category,price,isAvailable,imageUrl
    })

    const result=await newItem.save();

    res.status(200).json({
        success:true,
        message:"item create successfully",
        item:result
    })
} catch (error) {
    console.error("Error creating Item",error)

    return res.status(500).json({
        sucess:false,
        message:"Server error. Could not created item"
    })
}

}


//ANCHOR -  FETCH ALL ITEMS

exports.getAllItems=async(req,res)=>{

    try {
        
        const items=await Item.find().populate("category")

        res.status(200).json({
            success:true,
            message:"all data fetch successfully",
            data:items,
        })

    } catch (error) {
        console.error("Error fetching items:", error);
        res.status(500).json({
          success: false,
          message: "Failed to fetch items. Server error.",
        });
      
    }
}


  // FETCH Item FOR SPECIFIC CATEGORY


  exports.getItemsByCategory=async(req,res)=>{

    try {
        
        const {categoryId}=req.params;

        if(!categoryId){
            return res.status(400).json({
                success:false,
                message:"Invalid cateogry"
            })
        }
   

        const items=await Item.find({category:categoryId}).populate('category')

        res.status(200).json({
            success:true,
            data:items
        })

    } catch (error) {
        console.error("Error fetching items by category:", error);
        res.status(500).json({
          success: false,
          message: "Failed to fetch items by category",
        });
    }
}