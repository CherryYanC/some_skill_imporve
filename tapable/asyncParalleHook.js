/**
 * 异步并行任务钩子
 * AsyncParallelHook的API与AsyncSeriesHook的API雷同，差别在于并行与串行:
 * 并行执行消费者，所以控制台日志输出的时间间隔分别是1000ms、1000ms、1000ms
 */

const { AsyncParallelHook } = require('tapable')

class TapableTest {
    constructor() {
        this.hooks = {
            asyncParalleHook: new AsyncParallelHook(['params1', 'params2'])
        }
    }

    init() {
        this.hooks.asyncParalleHook.tapAsync('PluginA', (params1, params2, cb) => {
            setTimeout(() => {
                console.log(new Date(), 'PluginA', params1, params2)
                cb()
            }, 1000)
        })
        this.hooks.asyncParalleHook.tapAsync('PluginB', (params1, params2, cb) => {
            setTimeout(() => {
                console.log(new Date(), 'PluginB', params1, params2)
                cb()
            }, 1000)
        })
        this.hooks.asyncParalleHook.tapPromise('PluginC', (params1, params2) => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    console.log(new Date(), 'PluginC', params1, params2)
                    resolve()
                }, 1000)
            })
        })

        return this
    }

    start() {
        this.hooks.asyncParalleHook.callAsync({test: 'hello world'}, 'AsyncParalleHook', () => {
            console.log('all is done')
        })
    }
}

const test = new TapableTest() 

test.init().start()