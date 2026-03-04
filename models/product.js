const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    productUrl : String ,
    brand : String,
    description : String , 
    productId : String , 
    image : String , 
    gender : String , 
    discountPrice: Number,
    originalPrice : Number , 
    color : String ,
}, {timestamps : true })

module.exports = mongoose.model("Product", productSchema , "FasionDataSet")