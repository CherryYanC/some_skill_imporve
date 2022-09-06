
/**
 * call和apply类似
 */
Function.prototype._call = function(ctx, ...rest) {
    console.log(this)

    // 独一无二的symbol
    const symbol = Symbol()
    // 转移执行上下文
    ctx[symbol] = this

    const result = ctx[symbol](...rest)

    delete ctx[symbol]

    return result
}

const obj = {
    name: 'Xiao ming',
    age: 23,
}

function person(bobbies) {
    console.log(this.name + ' ' + this.age)
    console.log('hobbies:', ...bobbies)
}

person._call(obj, ['篮球', '足球', '游泳'])
