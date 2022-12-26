// async与await结合使用 读取文件内容

// 引入fs模块
const fs = require('fs')

// 定义读取文件函数
function readM1(){
	return new Promise((resolve,reject)=>{
		fs.readFile('./resources/a.md',(err,data)=>{
			// 如果读取失败
			if(err) reject(err);
			// 读取成功返回数据
			resolve(data);
		})
	})
}
function readM2(){
	return new Promise((resolve,reject)=>{
		fs.readFile('./resources/b.md',(err,data)=>{
			// 如果读取失败
			if(err) reject(err);
			// 读取成功返回数据
			resolve(data);
		})
	})
}

// 定义async函数
async function readFile(){
	let res = await readM1();
	let res2 = await readM2();
	console.log(res.toString());
	console.log(res2.toString());
}

readFile();