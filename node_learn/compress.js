let fs = require('fs');
let zlib = require('zlib');
fs.createReadStream('website.txt')
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream('website.txt.gz'));
    
console.log('compress done')