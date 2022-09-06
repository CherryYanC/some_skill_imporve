/**
 * instanceof
 */

const _instanceof = (target, fn) => {
    // 排除基本数据类型和undefiend、null
    if((typeof target !== 'object' && typeof target !== 'function') || target === null) return false

    let proto = target.__proto__

    if(proto === null) return false
    if(proto === fn.prototype) return true 
}

class A {}
const a = new A()

console.log('a instanceof A', a instanceof A)
