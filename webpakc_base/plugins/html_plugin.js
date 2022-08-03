class HtmlPlugin {
    constructor(options) {

    }

    //TODO: 还是没太理解compiler.hooks.emit.tap 和 complier.plugin有什么区别

    /** 必须是apply方法名， */
    apply(compiler) {
        // console.log('compiler', compiler)
        // compiler.hooks.emit.tap('HtmlPlugin', (compilation) => {
        //     const content = `<!DOCTYPE html><html>
        //     <head>
        //         <meta charset="UTF-8">
        //         <meta http-equiv="X-UA-Compatible" content="IE=edge">
        //         <meta name="viewport" content="width=device-width, initial-scale=1.0">
        //         <title>Document</title>
        //     </head>
        //     <body>fake html template</body>
        //     </html>`

        //     compilation.assets['fake.html'] = {
        //         source: function () {
        //             return content
        //         },
        //         size: function () {
        //             return content.length
        //         }
        //     }
        // })
        /** 
         * @description compiler有很多生命周期
         * @link https://www.webpackjs.com/api/compiler-hooks/
         */
        compiler.plugin('emit', function(compilation, callback) {
            // console.log('hello first plugin')
            // compilation.plugin('optimize', function() {
            //     console.log('inner opimize arguments')
            // })
            // setTimeout(() => {
            //     console.log('Donw with async work...')
            //     // callback()
            // }, 1000)
            console.log('hello world emit')
            // 在生成文件中吗，创建一个头部字符串
            let filelist = 'In this build: \n\n'

            // 便利所有变异过的资源文件
            // 对于每个文件名称，都添加一行内容
            for(let filename in compilation.assets) {
                filelist += ('- ' + filename + '\n')
            }

            // 将这个列表作为新的文件资源， 插入到webpack构建中
            compilation.assets['filelist.md'] = {
                source: function () {
                    return filelist
                },
                size: function () {
                    return filelist.length
                }
            }

            callback()
        })

        compiler.plugin('entryOption', (compilation) => {
            console.log('hello world entryOption')
        })
    }
}

module.exports = HtmlPlugin