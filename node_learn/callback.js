let fs = require('fs')
let data = fs.readFileSync('website.txt')
console.log(data.toString())
console.log('程序执行完毕')