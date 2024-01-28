const mongoose =require('mongoose')

const productSchema =new mongoose.Schema({
    name: {
        type:String,
        require: [true,'products name msut be provided'],
    },
    price:{
        type:Number,
        require: [true,'product price must be provided'],
    },
    featured:{
        type : Boolean,
        default:false,
    },
    rating:{
        type:Number,
        default:4.5,
    },
    createAT:{
        type:Date,
        default:Date.now(),
    },
    company:{
    type:String,
    values: ['ikea','liddy','caressa','marcos'],
    message:'{VALUE} s not supported',
    //enum:['ikea','liddy','caressa','marcos'],
},
})

module.exports = mongoose.model('Product',productSchema)