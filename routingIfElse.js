const http = require('http');
const fs = require('fs');



var server = http.createServer(function (req, res) {
if (req.url === '/home' || req.url === '/'){
  res.writeHead(200, {'content-Type':'text/html'});
  var myReadStream = fs.createReadStream(__dirname + '/index.html','utf8').pipe(res);
}
else if (req.url === '/contact'){
  res.writeHead(200, {'content-Type':'text/html'});
  var myReadStream = fs.createReadStream(__dirname + '/contact.html','utf8').pipe(res);
}
else if (req.url === '/api/ninjas'){
  res.writeHead(200, {'content-Type':'application/json'});
  var myObj=[{
    name:'Json',
    job:'Ninja',
    age:29
  },
  {
    name:'Rya',
    job:'Ninja',
    age:28
  }];
  res.end(JSON.stringify(myObj))
}
else{
  res.writeHead(200, {'content-Type':'text/html'});
  var myReadStream = fs.createReadStream(__dirname + '/404.html','utf8').pipe(res);
}
});

server.listen(3000, '127.0.0.1');
console.log("listing to port 3000");
