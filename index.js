require('dotenv').config()
const express = require('express');
const app = express();
const port = process.env.PORT || 3001
const connectDB = require('./config/db')
const jtRoutes = require('./routes/jtRoutes')

// Connect to DB
connectDB()

// Middleware
app.use(express.json())




//Routes
app.use('/api/jobtracker', jtRoutes);
app.get('*', (req, res)=>{
    res.send('Invalid Route: 404')
})


//Listener
app.listen(port, ()=>{
    console.log(`listening on port: ${port}`)
})