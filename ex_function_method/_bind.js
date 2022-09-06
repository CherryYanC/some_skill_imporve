/**
 * bind方法
 */

Function.prototype._bind = function(ctx) {
    if(typeof this !== 'function') return

    const self = this
    const args = Array.prototype.slice.call(arguments, 1)
    class fBound {
        constructor() {
            return self.apply(
                (this instanceof self ? this : ctx),
                args.concat(Array.prototype.slice.call(arguments))
            )
        }
    }

    // ????
    if(this.prototype) {
        fBound.prototype = this.prototype
    }

    return fBound
}

// 测试
function foo(name) {
    this.name = name;
}
var obj = {};
var bar = foo.myBind(obj);
bar('Jack');
console.log(obj.name);  // Jack
var alice = new bar('Alice');
console.log(obj.name);  // Jack
console.log(alice.name);    // Alice

