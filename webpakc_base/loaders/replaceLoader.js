module.exports = function (source) {
    console.log(source, this)
    return source.replace('hello', '你好啊')
}