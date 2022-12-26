// 入口文件 可以引入其它模块(js文件)
import {name,fn} from './m1.js'
import {name2,fn2} from './m2.js'
import m3 from './m3.js'

console.log(name,fn);
console.log(name2,fn2);
console.log(m3);

export default{
	name:name,
	name2:name2
}