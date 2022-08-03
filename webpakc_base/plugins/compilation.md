##### compilation 和 compiler的区别

compiler: 
```text
    Compiler类的实例，webpack 从开始执行到结束，Compiler只会实例化一次。compiler 对象记录了 webpack 运行环境的所有的信息，  
    插件可以通过它获取到 webpack 的配置信息，如entry、output、module等配置。
```
compilation: 
```text
    Compilation类实例，提供了 webpack 大部分生命周期Hook API供自定义处理时做拓展使用。  
    compilation 对象记录编译模块的信息，只要项目文件有改动，compilation 就会被重新创建。针对的是随时可变的项目文件。
```