const fs = require('fs');


var myReadStream = fs.createReadStream(__dirname + '/readme.txt','utf8');
var mywriteStream = fs.createWriteStream(__dirname + '/writeme.txt');

myReadStream.on('data',function (chunk) {
  console.log("recived new chunk");
  mywriteStream.write(chunk);
});
