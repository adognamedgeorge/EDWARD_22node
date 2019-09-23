let fs = require('fs'),
    zlib = require('zlib');
fs.createReadStream('website.txt.gz')
    .pipe(zlib.createGunzip())
    .pipe(fs.createWriteStream('website.txt'));

console.log('uncompress done');