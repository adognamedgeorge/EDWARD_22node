let fs = require('fs');
fs.readFile('webste.txt', function (err, data) {
    if (err) return console.error(err);
    console.log(data.toString())
});
console.log('程序结束！');