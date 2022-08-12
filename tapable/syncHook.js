/**
 * 同步执行钩子 --- SyncHook
 */

const { SyncHook } = require('tapable')

class TapableTest {
    constructor() {
        // 实例化同步钩子，接受两个参数
        this.hooks = {
            emit: new SyncHook(['params1', 'params2'])
        }
    }

    // 添加消息消费者
    init() {
        // hooks.emit 位 SyncHook类的实例，使用tap方法添加消息的消费者
        this.hooks.emit.tap('pluginA', (params1, params2) => {
            console.log(new Date(), 'pluginA', params1, params2)
            return true
        })

        this.hooks.emit.tap('pluginB', (params1, params2) => {
            console.log(new Date(), 'pluginB', params1, params2)
            return true
        })

        this.hooks.emit.tap('pluginC', (params1, params2) => {
            console.log(new Date(), 'pluginC', params1, params2)
            return true
        })
        return this
    }

    start () {
        this.hooks.emit.call({test: 'hello world'}, 'SyncHook')        
    }
}

const test = new TapableTest()

test.init().start()