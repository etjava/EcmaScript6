'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var name2 = 'tom';

function fn2() {
	console.log('m2.js');
}

// 统一暴漏
exports.name2 = name2;
exports.fn2 = fn2;