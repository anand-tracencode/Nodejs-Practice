const express = require('express');

var app = express();
app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));

app.get('/',function (req,res) {
  res.render('index');
});

app.get('/contact',function (req,res) {
  res.render('contact');
});

app.get('/profile/:id',function (req,res) {
  var myObj={name:'Json',job:'Ninja',age:29,hobbies:['Eating','Fighting','Fishing']};
  res.render('profile',{person:req.params.id,data:myObj});
});

app.listen(3000);
