module.exports = function (source) {
    // console.log(source, this)
    // source指的是每一个文件的内容，以字符串形式出现在这
    // console.log('source---', this)
    return source.replace('hello', '你好啊')
}