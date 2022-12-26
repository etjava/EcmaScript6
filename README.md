# EcmaScript6
ES6基本使用
## ES6介绍
略...
## let 声明变量
### let 声明变量时注意事项
```
let 声明变量时不能出现变量名重复
块级作用域中的变量不能被其它块级访问
let 声明的变量不存在提升 必须先声明变量才能使用
```
### let 声明变量语法
```
let + 变量名
如： let name = 'Tom'
或 
let name;
name = 'Tom'
```
### let 声明变量块级作用域
```
{
  let name = 'Tom'
}
console.log(name);// is not defined
```
### 同一个作用域链中可以使用let声明的变量
```
{
  let user = "Tom";
  function fnc(){
    console.log(user); // Tom
  }
  fnc();
}

```
![image](https://user-images.githubusercontent.com/47961027/209530003-1e75e10e-b163-409f-8c8e-aae9dcded14c.png)
### this相关说明
ES6中this始终指向声明时的变量 而在ES5中谁调用的this那么this就是谁
### 综合案例 动态改变div背景色
```
<body>
      <div class="item" style="border: 2px solid red; height: 50px; width: 50px;"></div>
      <div class="item" style="border: 2px solid red; height: 50px; width: 50px;"></div>
      <div class="item" style="border: 2px solid red; height: 50px; width: 50px;"></div>
      
      <script>
            // 获取div元素对象
            let items = document.getElementsByClassName("item");
            // 遍历并绑定事件
            // var 定义的遍历没有块级作用域的概念
            /* for(var i = 0;i<items.length;i++){
                  items[i].onclick = function(){
                        this.style.background = 'red';
                  }
            } */
            for(let i = 0;i<items.length;i++){
                  items[i].onclick = function(){
                        items[i].style.background='blue';
                  }
            }
      </script>
</body>
```
![image](https://user-images.githubusercontent.com/47961027/209530338-a5938881-9a9c-4499-b8a9-3da5de73d2ec.png)

## const 声明常量
常量指的是赋值后 值不能被修改，变量的值是可以被替换的
### 声明常量语法
```
// const 声明常量
const USER = "Tom";
```
### 声明常量一定要给初始值
如 const USER; 会出现未初始化异常
![image](https://user-images.githubusercontent.com/47961027/209530821-614b2312-bff1-4ee3-b145-917ebe3d4a1d.png)

### 常量的值不能被修改(数组的值及对象的属性除外)
```
const A=123;
A=456;
```
![image](https://user-images.githubusercontent.com/47961027/209530934-74a9895d-5eb5-437f-b366-2a579f9ce4bf.png)
### 常量的块级作用域
常量的块级作用域与变量相同 在同一个块级作用域中可以使用 但其它块级作用域中不可访问
```
{
const US = "USA";
}
console.log(US);
```
![image](https://user-images.githubusercontent.com/47961027/209531083-e8e5a61c-2df1-4737-83b4-0c8c53b2d4af.png)
### 常量可以修改数组和对象的元素
```
const DATA = [1,2,3,4,5];
DATA.push(6);
console.log(DATA)
```
![image](https://user-images.githubusercontent.com/47961027/209531116-73555ac2-5c4a-4292-8712-5d80b86cbda1.png)
### 常量定义的数组及对象中元素可以被修改但仅限于修改数组或对象的中的元素 如果修改常量的值是不允许的

![image](https://user-images.githubusercontent.com/47961027/209531261-13d3f623-7446-4ab1-b03e-1fbda012599f.png)
## 常量的解构
ES6 允许按照一定模式从数组或对象中提取值 然后对变量进行赋值 这种模式就是常量的解构
常量的解构需要注意如下事项
1. 变量名不能重复
2. 如果是提取对象的值 名称必须相同
### 数组的解构赋值
```
const BOOKS = ["Java","Python","MYSQL"];
let[k1,k2,k3] = BOOKS;
console.log(k1);
console.log(k2);
console.log(k3);
```
![image](https://user-images.githubusercontent.com/47961027/209531399-87e6d69c-81db-4346-88d7-b82e8aaad141.png)
### 对象的解构赋值
```
const USER = {
  name:"Tom",
  age:12,
  func:function(){
    console.log("Tom method...")
  }
};
// 提取对象中的值时 对象中的属性名称必须对应
let {name,age,func} = USER;
console.log(name);
// 调用对象中的方法
func();
```
![image](https://user-images.githubusercontent.com/47961027/209531590-847722db-5d68-4db9-b10c-d635d1e105e1.png)
### 对象的解构赋值2 单独提取对象中的一个值
```
let {func} = USER;
func();
```
![image](https://user-images.githubusercontent.com/47961027/209531701-f86979f8-9e1c-4342-a55f-320c3e4c240c.png)
## 模板字符串
ES6中新增了使用反引号声明字符串的方式
在ES5(JS)时代 声明字符串可以使用单引号或双引号 但ES6中又新增了使用单引号声明字符串的方式
反引号声明字符串的好处在于可以直接在字符串中进行换行 ，也可以直接使用变量进行拼接
```
// 声明字符串
let str = 'hello';
console.log(str,typeof str);
let str2 = `Hi,`;
console.log(str2,typeof str2);
```
![image](https://user-images.githubusercontent.com/47961027/209531834-242ce2a9-c1c2-4b0f-bed8-a92ed64a8326.png)
### 字符串中添加换行符
```
// 单引号需要拼接换行
let node = '<ul>'+
			'<li>Java</li>'+
			'<li>MYSQL</li>'+
			'</ul>'
console.log(node);
// 直接添加换行符
let node2 = `<ul>
			<li>Java</li>
			<li>MYSQL</li>
			</ul>`;
console.log(node2);	
```
![image](https://user-images.githubusercontent.com/47961027/209531915-2b740974-95bb-4cba-beff-aeb5601e6d84.png)
### 变量拼接
```
// 变量拼接
let s1 = 'hello';
let s2 = `${s1} world`;
console.log(`s2=${s2}`)
```
![image](https://user-images.githubusercontent.com/47961027/209531978-a8eab86f-63dc-4fc0-bbd3-b54eb38295bf.png)
### 简化对象的写法
ES6中允许在花括号中直接写入变量和方法，作为对象的属性和方法
```
// 定义变量
let name = 'Jerry';
let change = function(){
	console.log('定义方法')
}
// 对象赋值 ES6之前必须使用:进行赋值 ES6后可以直接省略
const user =  {
		name:name,
		change:change()
}
// 对象赋值简略写法
const user2 =  {
		name,
		change
}
// 调用对象中的方法
user2.change();
// 对象中直接定义方法
const user3 = {
		name,
    // ES6之前必须 变量名:function(){}
		// improve222:function(){
			// 处理业务
		// }
	// 简写
		improve222(xxx){
			// 处理逻辑
			console.log(xxx);
		}
}
user3.improve222(1234);
```
![image](https://user-images.githubusercontent.com/47961027/209532394-d295ce96-452e-47be-a1bd-fde3c8ab513b.png)
## 箭头函数
ES6中新增箭头(=>)来定义函数
### 箭头函数的声明
```
// ES5声明函数
function fn(){
	// 业务代码
}
// ES6可以使用箭头声明函数
let fn=(a,b)=>{
	return a+b;
}
```
调用箭头函数
```
// 调用函数
let res = fn(1,2);
console.log(res)
```
![image](https://user-images.githubusercontent.com/47961027/209533351-195c2baa-9fd7-4caf-804c-caf0b6b4e96f.png)
### 箭头函数的特性
#### 1. this是静态的
ES6中this始终是指向函数声明时所在的作用域下的this的值
```
// 声明函数
function getName(){
	console.log(this.name);
}
// 作用域是当前window对象(全局)
let getName2 = () =>{
	console.log(this.name);
}
// 设置window对象的name属性
window.name = 'hello';
// 定义一个常量 改变name值
const school = {
	name:'world'
}
// 普通方式调用
getName(); // hello
getName2(); // hello
// call方法调用 call方法可以改变this指向
getName.call(school);
getName2.call(school);
```
![image](https://user-images.githubusercontent.com/47961027/209533466-8340b4df-8aa1-44f3-b24d-493e52649732.png)
#### 2. 箭头函数不能作为构造器实例化对象
```
// ES5 创建构造函数实例化对象
var Person = function(name,age){
	this.name = name;
	this.age = age;
}
var aa = new Person('Tom',12);
console.log(aa)
// ES6 箭头函数不能作为构造器实例化对象
const Person2 = (name,age) => {
	this.name = name;
	this.age = age;
}
let p = new Person2('Jerry',13);
console.log(p);
```
![image](https://user-images.githubusercontent.com/47961027/209533591-2da8b54a-04ff-47f3-b2ed-3b0bf967c4f2.png)

#### 3. 箭头函数不能使用arguments变量
ES5中可以使用arguments特殊变量来保存实参 但ES6的箭头函数中不能使用
```
function f1(){
	console.log(arguments);
}
f1(1,2,3);
// 箭头函数不可以使用arguments变量
let f2 = () =>{
	console.log(arguments);
}
f2(2,3,4);
```
![image](https://user-images.githubusercontent.com/47961027/209533797-d52dcca4-fe9c-4e03-ab6e-07c4f1f483c6.png)
### 箭头函数的简写
省略小括号
当形参有且只有一个时 可以省略小括号
```
// 省略小括号
let add = n =>{
	return n+n;
}
console.log(add(7));
```
省略花括号
当方法体中有且仅有一条语句时可以省略花括号
但如果有return语句时 那么return也必须省略，语句的执行结果就是函数的返回值
```
// 省略花括号
let pow = n => n*n;
console.log(pow(7));
```
![image](https://user-images.githubusercontent.com/47961027/209533968-2d748664-87b0-4712-91b4-18bffe7a822d.png)
### 箭头函数练习 点击div 5秒后变成蓝色
需要注意this的使用 
箭头函数时(ES6) this始终指向的是函数在声明时的作用域
```
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
      div{
            width: 200px;
            height: 200px;
            background: #58a;
      }
</style>
<title></title>
</head>
<body>
<div id='ad2'></div>
<script>
      // 1. 点击div 5s后变成红色
      // 获取元素
      let ad2 = document.getElementById('ad2');
      // 绑定事件
      ad2.addEventListener('click',function(){
            // 定时器
            setTimeout(() => {
                  // this 指向的是函数声明时所在的作用域 即 ad2
                  // 如果使用function(){} this指向的是window对象
                  this.style.background='red';
            }, 2000);
      });
</script>
</body>
</html>
```
### 箭头函数练习 数组中返回偶数元素
```
// 定义数组
let data = [1,2,3,4,5,6];
// 过滤数组
let res = data.filter(function(item){
	if(item%2===0){
		return true;
	}
	return false;
});
console.log(res);
			
// 使用箭头函数简化写法
let res2 = data.filter(ite => ite%2===0);
console.log(res2);
```
![image](https://user-images.githubusercontent.com/47961027/209534347-c92d9538-a608-4813-9eef-dd138c71833f.png)
### 箭头函数总结
箭头函数可以简化代码逻辑
当有且仅有一个形参时可以省略小括号，当有且仅有一条执行语句时可以省略大括号
箭头函数适合与this无关的回调，例如定时器 数组的方法回调
箭头函数不适合与this有关的回调 例如对象的方法，事件的回调等
<font color=red>箭头函数中的this永远指向声明时的作用域的</font>
## 函数参数赋默认值
ES6中可以直接在参数列表中对参数设置默认值
注意：箭头函数不能使用这种方式
函数参数直接赋初始值
```
// 默认值一般放到参数列表的最后
function add(a,b,c=10){
	return a+b+c;
}
console.log(add(1,2));
```
### 与解构赋值结合
在解构赋值时如果有对应的参数则使用对应的 如果没有则使用指定的默认值
```
解构赋值
数组
const a = [1,2,3];
let {a1,a2,a3} = a;
console.log(a1);
对象
const user = {
	name:’aa’,
	age:12
}
let {name,age} = user;
console.log(age);
-----------------------------------
与解构赋值结合使用 
connection({
	//host:'localhost',
	port:3306,
	username:'root',
	password:'root'
});
// 没有对应的参数则使用指定的默认值
function connection({host='192.168.199.109',port,username,password}){
	console.log(host);
	console.log(port);
	console.log(username);
	console.log(password);
}
```
![image](https://user-images.githubusercontent.com/47961027/209539737-07c2218f-a9a3-4e6c-a916-8da2a5e279c6.png)
## rest参数
rest参数是用来代替ES5中arguments参数
rest参数是ES6中用来获取函数实参的
### 回顾ES5中使用arguments接收参数值
注意 arguments是一个对象
```
function fun(){
	console.log(arguments);
}
fun(1,2,3)
```
![image](https://user-images.githubusercontent.com/47961027/209539857-a1d99021-32e6-44c8-b251-90c53428d35a.png)
### 使用rest参数获取实参
rest是一个数组,且必须放到函数参数列表的最后 使用...参数名接收
数组可以使用filter，map等操作元素 如果是对象则不能直接操作
使用rest参数获取实参
```
// 注意 rest参数必须放到形参最后
function fn(a,b,...eee22){
	console.log(a);
	console.log(b);
	console.log(eee22);
}
fn('a','b','c','d');
```
![image](https://user-images.githubusercontent.com/47961027/209539996-a33fb5d1-503b-4c02-b0f6-8ddb1e1d15b5.png)
## 扩展运算符...
扩展运算符使用...表示 可以将数组转成带有逗号隔开的参数序列
扩展运算符与rest参数类似 但不同的是rest参数位置是在函数的形参列表中
而扩展运算符是在函数的调用参数中
### ES5方式接收参数
```
// 声明一个数组
let arr = ['Java','MySQL','DB2'];
// 声明一个函数 
function fn(){
	console.log(arguments);
}
fn(arr);
```
![image](https://user-images.githubusercontent.com/47961027/209540121-0db287d7-9291-4e63-9cdd-382b278891a9.png)
### ES6方式接收参数
```
// 声明一个数组
let arr = ['Java','MySQL','DB2'];
// 声明一个函数 
function fn(){
	console.log(arguments);
}
fn(...arr);
```
![image](https://user-images.githubusercontent.com/47961027/209540403-dec01ae1-b70d-469f-8d5c-e47402da6127.png)
### 扩展运算符应用
数组合并
将两个数组进行合并
```
// 数组合并
let u1 = ['Tom','Jerry'];
let u2 = ['Andy','Judy'];
// 数组合并 concat方式
let u = u1.concat(u2);
console.log(u);
// 数组合并 扩展运算符方式
let res = [...u1,...u2];
console.log(res);
```
![image](https://user-images.githubusercontent.com/47961027/209540461-b66c05c0-c3df-45e9-9d80-6f48a9942b29.png)
数组的clone
```
let arr1 = [1,2,3];
let arr2 = [...arr1];
console.log(arr2);
```
伪数组转成真正的数组
```
// 将伪数组转成真正的数组 1
let a1 = 1, a2=2,a3=3;
let arr3 = [a1,a2,a3];
console.log(arr3);
// 将伪数组转成真正的数组 2
// 将div转成数组
let divs = document.querySelectorAll('div');
let divArr = [...divs];
console.log(divArr);
```
![image](https://user-images.githubusercontent.com/47961027/209540551-b608a6db-31ee-489c-a60b-fe55348c2a21.png)
## Symbol数据类型使用
ES6引入了一种新的数据类型symbol 表示值是唯一的，他是JS语言的第七种数据类型 类似字符串类型
Symbol与字符串类型不同的是不能参与任何运算 包括自身
### Symbol特点
* symbol值是唯一的
* symbol的值不能与其它参数进行运算
* symbol定义的对象属性不能使用for...in 循环遍历 可以使用Reflect.ownKeys来获取对象的所有key
### Symbol创建方式
```
// symbol 创建方式1
let s1 = Symbol();
console.log(s1,typeof s1);// Symbol() "symbol"
// symbol 创建方式2
let s2 = Symbol('Jerry');
let s3 = Symbol('Jerry');
console.log(s2 === s3);// false
// symbol 创建方式3
let s4 = Symbol.for('Tom');
let s5 = Symbol.for('Tom');
console.log(s4 === s5);// true
```
![image](https://user-images.githubusercontent.com/47961027/209541500-4c01bf35-134f-441b-9584-bac98d4da4fd.png)
### 测试Symbol与其它类型参与运算
```
// symbol 不能参与任何运算
let s5 = Symbol.for('Tom');
// let s6 = s2+s3;
// let s7 = s2+100;
// let s8 = s1>100;
let s9 = 'aaa'+s5;
```
![image](https://user-images.githubusercontent.com/47961027/209541575-8efa4cbf-907c-4f27-bd3e-48197318c445.png)

## 扩展[JS数据类型]














