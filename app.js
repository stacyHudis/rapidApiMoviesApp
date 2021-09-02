//import modules
const express = require('express');
const cors = require('cors');
const path = require('path');

//Loads env variables from .env file
require('dotenv').config();

//Create app
const app = express();

//port
const port = process.env.PORT || 3000;

const route = require('./routes/routes');

//json parse
app.use(express.json());

//add CORS support -
//FrontEnd is using localhost:8000
//BackEnd is using localhost:3000
//Need to allow cross-origin resource sharing
app.use(cors());

//Paths
const viewsPath = path.join(__dirname, './public');

// view engine setup
app.set('view engine', 'pug');
app.set('views', viewsPath);

//routes
app.use('/api', route);

//listen
app.listen(port, () => {
    console.log('Server listening at port:' + port);
});