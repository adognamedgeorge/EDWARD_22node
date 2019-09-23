let fs = require('fs');
let data = 'ffffffffffffffffk';
let writeStream = fs.createWriteStream('website.txt');
writeStream.write(data, 'UTF-8');
writeStream.end();
writeStream.on('finish', function() {
    console.log('写入完成')
});
writeStream.on('error', function(err) {
    console.log(err.stack)
});
console.log('gameover')