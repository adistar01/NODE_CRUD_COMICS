const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
console.log(connectDB);
const comicRouter = require('./routes/comicRoute');
const morgan = require('morgan');

// To include variables to be hidden using .env file
dotenv.config();

// To establish connection with database
connectDB();

const server = express();

server.use(express.json());

// Using middleware to print logs on server
server.use(morgan('dev'));

// Setting router path to /api 
server.use('/api', comicRouter);

server.get('/', async(req, res)=>{
    res.send("Hello");
});

const PORT = process.env.PORT || 7080;

server.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})