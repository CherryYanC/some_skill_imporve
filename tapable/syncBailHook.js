const { SyncBailHook } = require('tapable')

class Test {
    constructor() {
        this.hooks = {
            emit: new SyncBailHook(['params1', 'params2'])
        }
    }

    init() {
        this.hooks.emit.tap('pluginA', (params1, params2) => {
            console.log(new Date(), 'pluginA', params1, params2)
        })
        this.hooks.emit.tap('pluginB', (params1, params2) => {
            console.log(new Date(), 'pluginB', params1, params2)
            return true
        })
        this.hooks.emit.tap('pluginC', (params1, params2) => {
            console.log(new Date(), 'pluginC', params1, params2)
        })

        return this
    }

    start() {
        this.hooks.emit.call({test: 'hello world'}, 'syncBailHook')
    }
}

const test = new Test()

test.init().start()