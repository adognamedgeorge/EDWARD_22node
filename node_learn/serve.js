// 使用 require 指令来载入 http 模块，并将实例化的 HTTP 赋值给变量 http;
// (请求（require）Node.js 自带的 http 模块，并且把它赋值给 http 变量)
let http = require('http')
// 使用 http.createServer() 方法创建服务器;并使用 listen 方法绑定 8888 端口;函数通过 request, response 参数来接收和响应数据;
// 调用 http 模块提供的函数： createServer 。这个函数会返回 一个对象，这个对象有一个叫做 listen 的方法，这个方法有一个数值参数， 指定这个 HTTP 服务器监听的端口号。
http.createServer(function (request, response) {
    // 发送Http头部；HTTP状态值：200：OK；内容类型：text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});
    // 发送响应数据：hellllo world; \n表示换行，相当于按一下回车
    response.end('hellllo world\n');
}).listen(8888);
// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8888/');
