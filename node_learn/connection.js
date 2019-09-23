let events = require('events')
let eventEmitter = new events.EventEmitter()
let listener1 = function listener1() {
    console.log('监听器listener1执行')
}
let listener2 = function listener2() {
    console.log('监听器listener2执行')
}
eventEmitter.addListener('connection', listener1)
eventEmitter.on('connection', listener2)
let eventListeners = eventEmitter.listenerCount('connection')
console.log(eventListeners + '个监听事件')
eventEmitter.emit('connection')

eventEmitter.removeListener('connection', listener1)
console.log('listener1不再受监听')

eventEmitter.emit('connection')
eventListeners = eventEmitter.listenerCount('connection')
console.log(eventListeners + '个监听事件')
console.log('程序执行完毕！')
