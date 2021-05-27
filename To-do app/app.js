const express = require('express');
const bodyParser = require('body-parser');

const todocontroller = require('./controllers/todocontrollers');

var app = express();

//set up template engine
app.set('view engine', 'ejs');
//static files
app.use(express.static('./public'));


//fire function
todocontroller(app);



//Listen to post
app.listen(3000);
