const fs = require('fs');
// 原生方式 多层嵌套读取多个文件
// fs.readFile('./resources/a.md',(err,data1)=>{
// 	fs.readFile('./resources/b.md',(err,data2)=>{
// 		fs.readFile('./resources/c.md',(err,data3)=>{
// 			let result = data1+"\r\n"+data2+"\r\n"+data3;
// 			console.log(result);
// 		})
// 	})
// })

// promise方式
// 创建promise对象
const p = new Promise((resolve,reject)=>{
	fs.readFile('./resources/a.md',(err,data)=>{
		// 方便演示 不做判断
		resolve(data);// 成功直接返回数据
	})
});

p.then(value=>{
	return new Promise((resolve,reject)=>{
		fs.readFile('./resources/b.md',(err,data)=>{
			// 读取到的第二个文件内容 ，第一个是value 第二个内容是data
			resolve([value,data]);
		})
	})
}).then(value=>{
	return new Promise((resolve,reject)=>{
		fs.readFile('./resources/c.md',(err,data)=>{
			// value是前两个文件读取的内容 然后追加上最后一个文件的内容即可
			value.push(data);
			resolve(value);
		})
	})
}).then(value=>{
	// 使用换行符将三个文件内容拼接起来
	console.log(value.join('\r\n'))
})