/**
 * 串行执行消费者
 */
const { AsyncSeriesHook } = require('tapable')

class TapableTest {
    constructor() {
        this.hooks = {
            asyncSeriesHook: new AsyncSeriesHook(['params1', 'params2'])
        }
    }

    init() {
        this.hooks.asyncSeriesHook.tapAsync('pluginA', (params1, params2, cb) => {
            setTimeout(() => {
                console.log(new Date(), 'pluginA', params1, params2)
                cb()
            }, 1000)
        })
        this.hooks.asyncSeriesHook.tapAsync('pluginB', (params1, params2, cb) => {
            setTimeout(() => {
                console.log(new Date(), 'pluginB', params1, params2)
                cb()
            }, 1000)
        })
        /**
         * tapPromise和tapAsync作用一样，用法有点差异
         */
        this.hooks.asyncSeriesHook.tapPromise('pluginC', (params1, params2) => {
            return new Promise(resolve => {
                setTimeout(() => {
                    console.log(new Date(), 'pluginC', params1, params2)
                    resolve()
                }, 1000)
            })
        })

        return this
    }

    start() {
        this.hooks.asyncSeriesHook.callAsync({test: 'hello world'}, 'asyncSeriesHook', () => {
            console.log('all is done')
        })
    }
}

const test = new TapableTest()

test.init().start()