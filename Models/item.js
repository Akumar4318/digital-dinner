
const mongoose=require('mongoose')

const itemSchmea=new mongoose.Schema({

    name: {
        type: String,
        required: true,
      },
    
      description: {
        type: String,              
        required: true,
      },
    
      category: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"Category"
                 
      },
    
      price: {
        type: Number,
        required: true,           
      },
      imageUrl: {
        type: String,             
        required: true,
      },
     
      isAvailable: {
        type: Boolean,
        default: true,
      },
    
      createdAt: {
        type: Date,
        default: Date.now,
      }



})
module.exports=mongoose.model('Item',itemSchmea)