const express = require('express');
const bodyParser = require('body-parser');

var app = express();
var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));

app.get('/',function (req,res) {
  res.render('index');
});

app.get('/contact',function (req,res) {
  res.render('contact',{qs:req.query});
});

app.post('/contact', urlencodedParser, function (req, res) {
  res.render('contact-success',{data:req.body});
});

app.get('/profile/:id',function (req,res) {
  var myObj={name:'Json',job:'Ninja',age:29,hobbies:['Eating','Fighting','Fishing']};
  res.render('profile',{person:req.params.id,data:myObj});
});

app.listen(3000);
