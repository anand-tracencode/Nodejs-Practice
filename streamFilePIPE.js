const fs = require('fs');


var myReadStream = fs.createReadStream(__dirname + '/readme.txt','utf8');
var mywriteStream = fs.createWriteStream(__dirname + '/writeme.txt');

myReadStream.pipe(mywriteStream)
