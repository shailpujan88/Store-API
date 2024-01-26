require('dotenv').config()


const express = require('express');
const app=express();

const connectDB =require('./db/connect')
const productsRouter = require('./routes/products')
const notFoundMiddleware =require('./middleware/not-found')
const errorHandlerMiddleware =require('./middleware/error-handler')

//middleware
app.use(express.json())

//routes
app.get('/',(req,res)=>{
    res.send('<h1>STORE API</h1><a href ="/api/v1/products">products route</>')
})

app.use('/api/v1/products', productsRouter)

//products route

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 3000

const start =async () =>{
    try {
        //connectDb
        await connectDB(process.env.MONGO_URI)
        app.listen(port,console.log(`Server is Listening port ${port}...`))

    }
    catch(error){
     console.log(error)
    }
};

start();