const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/iCart',()=>{
    console.log('Mongodb Connected successfully');
})

 const Product =  mongoose.model('Product',{
    
       
        id: Number,
        title: String,
        price: Number,
        description: String,
        image:String
      
})

const Wishlist =  mongoose.model('Wishlist',{
    
       
    id: Number,
    title: String,
    price: Number,
    description: String,
    image:String
  
})





module.exports = {
    Product,
    Wishlist
}
