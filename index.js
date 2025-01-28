require('dotenv').config()
const express = require('express');
const app = express();
const port = process.env.PORT || 3001
const bodyParser = require('body-parser')
const connectDB = require('./config/db')

// Connect to DB
connectDB()

// Middleware




//Routes




//Listener
app.listen(port, ()=>{
    console.log(`listening on port: ${port}`)
})