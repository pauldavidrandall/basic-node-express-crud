//app.js
const express = require('express');
const bodyParser = require('body-parser');

//import routes
const product = require('./routes/product.routes');

//initialize app
const app = express();

//set mongoose connection
const mongoose = require('mongoose');
let dev_db_url = 'mongodb://user4321:Password4321@ds155073.mlab.com:55073/pdr-mongo4321';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error: '));

//app use body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//app use routes
app.use('/products', product);

//assign port
let port = 4321;

app.listen(port, () => {
    console.log('Server is up and running on port ' + port);
})