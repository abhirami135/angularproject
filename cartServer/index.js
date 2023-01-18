const express = require('express')

const cors = require('cors')

const dataService = require('./services/dataService')


const app = express()


app.use(express.json())


app.use(cors({
    origin:'http://localhost:4200'
}))

app.listen(3000,()=>{
    console.log('Server started at 3000');
})

//getAllProducts API
app.get('/all-products',(req,res)=>{
    console.log('inside getAllproducts function ');
    dataService.getAllProducts()
    .then((result)=>{
        res.status(result.statusCode).json(result)
    })
})

//add-to-wishlist API
app.post('/add-to-wishlist',(req,res)=>{
    console.log('inside add-to-wishlist function');
    console.log(req.body);

    dataService.addTowishlist(req.body.id,req.body.title,req.body.price,req.body.description,req.body.image)
    .then((result)=>{
        res.status(result.statusCode).json(result)
       })
})

//getwishlist api
app.get('/get-wishlist',(req,res)=>{
    console.log('inside get-wishlist fn ');
    
    dataService.getWishlist()
    .then((result)=>{
        res.status(result.statusCode).json(result)
       })
})


//deleteItemWishlist api
app.delete('/delete-item-wishlist/:id',(req,res)=>{
    console.log('inside delete-item-wishlist fn ');
    
dataService.deleteItemWishlist(req.params.id)
.then((result)=>{
    res.status(result.statusCode).json(result)
   })
})
