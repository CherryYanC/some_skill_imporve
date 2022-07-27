class HtmlPlugin {
    constructor(options) {

    }

    /** 必须是apply方法名， */
    apply(complier) {
        complier.hooks.emit.tap('HtmlPlugin', (compolation) => {
            const content = `<html><body>fake html template</body></html>`

            compolation.assets['fake.html'] = {
                souce: function () {
                    return content
                },
                size: function () {
                    return content.length
                }
            }
        })
    }
}

module.exports = HtmlPlugin