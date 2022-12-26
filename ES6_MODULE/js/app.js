// 入口文件 可以引入其它模块(js文件)
import {name,fn} from './m1.js'
import {name2,fn2} from './m2.js'
import m3 from './m3.js'

// console.log(name,fn);
// console.log(name2,fn2);
// console.log(m3);

// export default{
// 	name:name,
// 	name2:name2
// }

// 引入jquery模块 JQuery222变量名通常使用$符号代替 导入时使用的是什么 下边使用必须一致
import JQuery222 from 'jquery';// 相当于 const JQuery = require('jquery')
 // 改变页面背景色
 JQuery222('body').css('background-color','pink');