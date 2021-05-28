const http = require('http');

var server = http.createServer(function (req, res) {
  res.writeHead(200, {'content-Type':'text/plain'});
  res.end("Hey ninjas");
});

server.listen(3000, '127.0.0.1');
console.log("listing to port 3000");
