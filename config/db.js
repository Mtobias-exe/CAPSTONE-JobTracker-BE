require('dotenv').config()
const mongoose = require('mongoose');

//connect to the database
const connectDB = async () => {
    try {
       mongoose.connect(process.env.MONGO_URI);
       mongoose.connection.once("open", () => {
        console.log("Connected to mongodb");
      });
    } catch (error) {
      console.log(`Something went wrong connecting to mongodb: ${error.message}`);
    }
  };
  
  module.exports = connectDB;