/**
 * map
 */

Array.prototype._map = function(fn) {
    if (typeof fn !== 'function') throw new Error('not function')
    const result = []
    for(let i = 0; i < this.length; i++) {
        result.push(fn.call(null, this[i], i, this))
    }
    return result
}

let arr = [2, 4, 2,7, 9, 5]

const res = arr._map((n) => {
    if(n > 5) return n
    return undefined
})

console.log('res', res)