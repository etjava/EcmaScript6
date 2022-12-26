// 读取文件
// 引入node 的 fs模块
const fs = require('fs');
// 调用fs模块的读取方法
// fs.readFile('./resources/a.md',(e,data)=>{
// 	// 判断 如果失败则抛出异常
// 	if(e) throw e;
// 	// 读取成功则输出内容
// 	console.log(data.toString());
// });

// 使用promise封装读取文件的方法
const p = new Promise((resolve,reject)=>{
	fs.readFile('./resources/a.md',(err,data)=>{
		// 失败需要改变p状态
		if(err) reject(err);
		// 成功则返回读取到的文件内容 buffer流
		resolve(data);
	})
})
// 通过promise对象的then方法调用
p.then(function(value){
	console.log(value.toString());
},
function(reason){
	console.error(reason);
})