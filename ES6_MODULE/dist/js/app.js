'use strict';

var _m = require('./m1.js');

var _m2 = require('./m2.js');

var _m3 = require('./m3.js');

var _m4 = _interopRequireDefault(_m3);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 相当于 const JQuery = require('jquery')
// 改变页面背景色
// 入口文件 可以引入其它模块(js文件)
(0, _jquery2.default)('body').css('background-color', 'pink');

// console.log(name,fn);
// console.log(name2,fn2);
// console.log(m3);

// export default{
// 	name:name,
// 	name2:name2
// }

// 引入jquery模块