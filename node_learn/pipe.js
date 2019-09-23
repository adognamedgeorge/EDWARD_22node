let fs = require('fs');
let readerStream = fs.createReadStream('./txt/output.txt');
let writerStream = fs.createWriteStream('./txt/input.txt');
readerStream.pipe(writerStream);
console.log('gameover')