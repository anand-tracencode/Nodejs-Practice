const fs = require('fs');

//syncronus
//It will block code until reading finishes
var readme = fs.readFileSync('readme.txt','utf8');

fs.writeFileSync('writeme.txt', readme)

//Asyncronus
fs.readFile('readme.txt','utf8',function (err, data) {
  fs.writeFile('writeme.txt', data);
});

//delete files
fs.unlink('readme.txt');
fs.unlink('writeme.txt');

//make directories
fd.mkdirSync('folder name');

//remove directories
fd.rmdirSync('folder name');
