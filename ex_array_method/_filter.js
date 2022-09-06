/**
 * filter
 * @example [].filter((item, index, collection) => false)
 */

Array.prototype._filter = function(fn) {
    if (typeof fn !== 'function') throw new Error('not function')
    let result
    for(let i in this) {
        if(fn.call(null, this[i], i)) {
            result = this[i]
            console.log(i)
            break
        }
        console.log('i-----', i)
    }

    return result
}

let arr = ['a', 'b', 'c', 'd']
const res = arr._filter((item) => item === 'b')

console.log('res', res)
