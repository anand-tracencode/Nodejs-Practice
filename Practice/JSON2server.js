const http = require('http');
const fs = require('fs');



var server = http.createServer(function (req, res) {
  res.writeHead(200, {'content-Type':'application/json'});
  var myObj={
    name:'Json',
    job:'Ninja',
    age:29
  };
  res.end(JSON.stringify(myObj))
});

server.listen(3000, '127.0.0.1');
console.log("listing to port 3000");
