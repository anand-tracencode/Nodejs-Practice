const http = require('http');
const fs = require('fs');



var server = http.createServer(function (req, res) {
  res.writeHead(200, {'content-Type':'text/plain'});
  var myReadStream = fs.createReadStream(__dirname + '/readme.txt','utf8');
  myReadStream.pipe(res)
});

server.listen(3000, '127.0.0.1');
console.log("listing to port 3000");
