let fs = require('fs');
let data = '';
let readerStream = fs.createReadStream('website.txt');
readerStream.setEncoding('UTF-8');
readerStream.on('data', function(chunk) {
    data += chunk;
});
readerStream.on('end', function() {
    console.log(data)
});
readerStream.on('error', function() {
    console.log(err.stack)
});
console.log('程序执行完毕')