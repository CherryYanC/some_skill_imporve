/**
 * reduce
 * @params previousValue, currentValue, currentIndex, array
 */

Array.prototype._reduce = function(fn, initValue) {
    for(let i in this) {
        initValue += this[i]

        fn.call(null, initValue, this[i], i, this)
    }

    return initValue
}
// 0 + 1 + 2 + 3 + 4
const array1 = [1, 2, 3, 4];
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue
)

console.log('sumWithInitial', sumWithInitial);