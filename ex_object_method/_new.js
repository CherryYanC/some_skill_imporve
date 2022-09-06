/**
 * new操作符：
 * 1. 创建一个空的简单 JavaScript 对象（即**{}**）；
 * 2. 为步骤 1 新创建的对象添加属性**__proto__**，将该属性链接至构造函数的原型对象 ；
 * 3. 将步骤 1 新创建的对象作为**this**的上下文 ；
 * 4. 如果该函数没有返回对象，则返回**this**。
 */

const _new = function(constructor) {
    // 创建一个空对象
    const obj = {}
    // 原形链挂载
    obj.__proto__ = constructor.prototype
    // 把新创建的对象作为**this**的上下文
    const result = constructor.call(obj)
    // 如果没有该函数则返回对象即：**this**
    return typeof result === 'object' && result !== null ? result : obj
}