/**
 * create
 */

Object.prototype._create = function(obj) {
    const Fn = function() {}
    // 继承
    Fn.prototype = obj
    return new Fn()
}

function A() {}

const _a = new A()
const a = Object._create(A)

console.log('a instanceof A', _a instanceof A)
console.log('a.__proto__ === A', a.__proto__ === A)
