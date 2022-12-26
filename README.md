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
Symbol主要是用来给对象添加属性和方法的
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
USONB
* U undefind
* S string symbol
* O object
* N null
* B Boolean
### Symbol给对象添加唯一属性
```
// 向对象中添加方法 up down
const game = {
	up:'上升',
	down:'下降'
}
// 声明一个对象 包含up down两个属性 以便方便的添加到game对象中
const m1 = {
	up: Symbol(),
	down: Symbol()
}
// 添加到game对象中
game[m1.up] = function() {
	console.log('m1 的up');
}
game[m1.down] = function() {
	console.log('m1 的down');
}
// 调用
console.log(game);
```
![image](https://user-images.githubusercontent.com/47961027/209541924-a4a7c86a-c9d3-4ac1-8f1e-4184257e8719.png)
### Symbol给对象添加唯一方法
```
// 给对象添加唯一方法
let ss = {
name:'Java',
	[Symbol('author')]:function (){
		console.log("java 作者");
	},
	[Symbol('version')]:function (){
		console.log("java 版本");
	}
}
console.log(ss);
```
![image](https://user-images.githubusercontent.com/47961027/209542121-27a6eaee-aafe-490e-ae5a-859100e3121e.png)
### Symbol内置属性
```
Symbol.hasInstance		其它对象调用instanceof运算时 判断是否为该对象的实例
Symbol.isConcatSpreadable	合并时属性是否展开 false不展开
Symbol.unscopables		指的使用with排除的属性
Symbol.match			执行str.math(o)时 如果o存在 则调用返回该方法的返回值
Symbol.replace	
Symbol.search	
Symbol.split	
Symbol.iterator			对象进行for循环时返回该对象的默认迭代器
Symbol.toPrimitive		将对象转成原始类型的值
Symbol.toStringTag		对象调用toString
Symbol.species			创建衍生对象时使用该属性
```
* hasInstance使用
hasInstance是一种比较机制 用来判断是否是该对象的实例 其决定值由Symbol对象的返回值决定的
如果返回的是true那么最终结果就是true
```
// Symbol.hasInstance
class User{// 构造器
static [Symbol.hasInstance](params){ // 构造器可以传递参数
	console.log("自定义对象构造器");
		console.log(params);
		// return true;
	}
}
			
let dd = [2,3,4];
console.log(dd instanceof User)
```
![image](https://user-images.githubusercontent.com/47961027/209542508-7256d316-914f-4196-a7f3-fe0e23e33f1c.png)
![image](https://user-images.githubusercontent.com/47961027/209542514-0e0dd186-4a0a-40bd-9762-b088344fba97.png)
* isConcatSpreadable使用
合并时 属性是否展开
```
在合并数组或对象时是否展开
let a1 = [1,2,3];
let a2 = [4,5];
let a3 = a1.concat(a2);
console.log(a3)
a2[Symbol.isConcatSpreadable] = false;// a2数组不展开
let a4 = a1.concat(a2);
console.log(a4)
// 类似使用扩展运算符 一个进行展开 一个使用普通方式
let d1 = [1,2,3];
let d2 = [4,5];
let d3 = [...d1,d2];
console.log(d3);
```
![image](https://user-images.githubusercontent.com/47961027/209542621-8596e381-0706-470a-91db-76f208a8e125.png)
* iterator迭代器使用
iterator是一种接口(JS种是Symbol的一个属性) 为各种不同数据解构提供统一的访问机制
iterator就是用来遍历数据的迭代器
ES6引入了一种新的遍历命令 for...of 直接获取到元素内容 ，iterator主要提供for ... of 消费
具备iterator数据解构的对象有Array,Arguments,Set,Map,String,TypeArray,NodeList
- 遍历数组
1. 创建一个指针对象，指向当前数据结构的起始位置
2. 第一次调用对象的next方法时 指针自动指向数据解构的第一个成员
3. 再次调用对象的next方法时 指针会后移 直到指向最后一个成员
4. 每次调用next方法都会返回一个包含value和done属性对象
	value是next指向的成员对象值，done表示是否迭代完成 true为完成 只有遍历到最后一个对象时true
```
// 定义数组
let arr = ['Java','DB2','MySQL'];
// 遍历对象 for in  返回数组下标索引值
for(let v in arr){ 
	console.log(v);
}

// 遍历对象 for of 返回数组中的内容
for(let v of arr){
	console.log(v);
}
```
![image](https://user-images.githubusercontent.com/47961027/209542763-97c8bca3-50fb-4b76-b3a7-8c440325af46.png)
* 获取对象中的iterator属性
```
let car = arr[Symbol.iterator]();
// 调用对象的next方法
console.log(car.next());
console.log(car.next());
console.log(car.next());
console.log(car.next());
console.log(car.next());
```
![image](https://user-images.githubusercontent.com/47961027/209542819-ddb347e8-cd66-4f80-8701-0822cf65f3c8.png)
* 自定义遍历数据(遍历对象)
数组的迭代器是JS自带的，但对象是自定义的 我们想使用for of 遍历对象中的属性值 需要自定义iterator
普通方式遍历
```
// 创建对象
const user = {
    name:'Tom',
    score:[
        9,
        7,
        6.5
    ],
    [Symbol.iterator](){
        let index = 0;
	// 接收外部this
        let _this = this;
        return {
            next: function(){
                if(index < _this.score.length){
                    const res = {
                        value: _this.score[index],
                        done: false
                    }
                    index++;
                    return res;
                }else{
                    return {
                        value: undefined,
                        done: true
                    }
                }
            }
        }
    }
}
// 遍历对象的得分 
// user.score.forEach(function (e){
//  console.log(e);
// });
// 自定义iterator方式遍历
for(let as of user){
    console.log(as);
}
```
#### 使用箭头函数定义自定义迭代器
ES6中this指向的始终是函数声明时的作用域下的this值
```
// 创建对象
const user = {
    name:'Tom',
    score:[
        9,
        7,
        6.5
    ],
    [Symbol.iterator](){
        let index = 0;
        // let _this = this;
        return {
            next: ()=>{
                if(index < this.score.length){
                    const res = {
                        value: this.score[index],
                        done: false
                    }
                    index++;
                    return res;
                }else{
                    return {
                        value: undefined,
                        done: true
                    }
                }
            }
        }
    }
}
// 遍历对象的得分 
// user.score.forEach(function (e){
//  console.log(e);
// });
// 自定义iterator方式遍历
for(let as of user){
    console.log(as);
}
```
![image](https://user-images.githubusercontent.com/47961027/209543048-425c5c86-cea5-4bb4-896a-61168478c3c5.png)
## 生成器函数
生成器函数本质是一个函数 但它是一个特殊的函数(生成器函数天然支持iterator属性)，因为他的定义与调用都与普通函数不同
<font color='red'>生成器函数用来实现异步编程使用的</font>，在ES5中可以通过回调函数实现异步请求 例如ajax
创建生成器函数语法 function * 函数名(形参列表){方法体}
### 创建和调用生成器函数
```
// 创建生成器函数
function * fn(){
    console.log('这是一个生成器函数')
}
// 调用生成器函数
let res = fn();
console.log(res);
// 调用next才会执行函数中的方法
console.log(res.next());
```
### 使用for of 遍历生成器函数
```
// 创建生成器函数
// yield 是分隔符 后面可以跟字面值或表达式
function * fn2(){
    yield 'aaa';
    yield 123;
    yield true;
}
// for of 遍历生成器函数
for(let v of fn2()){
    console.log(v)
}
```
### 生成器函数的参数传递
可以在函数调用时 整体传递参数 也可以通过next传递参数
demo
```
// 创建生成器函数
function * fn3(o){
    console.log(o);
    let a1 = yield 111;
    console.log(a1);
    let a2 = yield true;
    console.log(a2);
    let a3 = yield 'FFF'
    console.log(a3);
}
let r = fn3('AAA');
// next传递的参数作为第一个yield整体语句的返回结果
console.log(r.next('DDD'))
console.log(r.next('EEE'))
console.log(r.next('GGG'))
```
![image](https://user-images.githubusercontent.com/47961027/209543567-1e4d5823-3593-4b46-b5c2-b6be7632a350.png)
### 异步编程实例
浏览器控制台 1s后输出111 然后 2s后输出222 在然后 3s后输出333
#### 实现方式1 setTimeOut 嵌套 此方式如果业务较多 嵌套就会比较多 不利于管理里
```
setTimeout(()=>{
      console.log(111);
      setTimeout(()=>{
            console.log(222);
            setTimeout(()=>{
                console.log(333);
            },3000);
        },2000);  
},1000);
```
#### 实现方式2 生成器函数
```
function f1(){
    setTimeout(()=>{
        console.log(111)
        car.next();// 
    },1000)
}
function f2(){
    setTimeout(()=>{
        console.log(222)
        car.next();
    },2000)
}
function f3(){
    setTimeout(()=>{
        console.log(333)
        car.next();
    },3000)
}
// 创建生成器函数
function * fR(){
    yield f1();
    yield f2();
    yield f3();
}
// 调用生成器函数
let car = fR();
car.next();
```
![image](https://user-images.githubusercontent.com/47961027/209543758-cefc2cfe-ddc4-430a-a12b-68f8c39cc270.png)
#### 生成器函数模拟获取订单数据
模拟获取数据 按顺序分别获取 用户，订单，商品数据
注意 一定是按照先后顺序获取的
```
function getUser(){
    setTimeout(()=>{
        let data = '用户数据';
        car2.next(data);// next传递参数
    },1000);
}
function getOrder(){
    setTimeout(()=>{
        let data = '订单数据';
        car2.next(data);
    },1000);
}
function getGoods(){
    setTimeout(()=>{
        let data = '商品数据';
        car2.next(data);
    },1000);
}
// 定义 生成器函数 
function * gen(){
    let user = yield getUser();// 执行并接收返回值 需要在调用next时将数据作为返回值返回
    console.log(user);
    let order = yield getOrder();
    console.log(order);
    let goods = yield getGoods();
    console.log(goods);
}
let car2 = gen();
car2.next();
```
## Promise函数
promise函数是一个构造方法 用来解决异步编程中的嵌套问题
### Promise函数基本使用
Promise实例化时需要传入回调函数 回调函数中需要两个参数 第一个是执行成功的回调，第二个参数是执行失败的回调
通过promise对象的then方法可以获取到promise执行的返回结果
```
// 创建Promise对象
// resolve 成功时调用,reject 失败时调用
const p = new Promise(function(resolve,reject){
    setTimeout(()=>{
        // 模拟请求
        let data = '获取数据成功';
        // 获取数据成功 调用第一个参数 resolve 
        // p 的状态会跟着改为成功状态
        //resolve(data);
        
        // 模拟执行失败
        reject('获取数据失败');
    },1000)
})
// 通过promise对象的then方法获取到执行成功的数据
// then 第一个参数是执行成功的回调，第二个是执行失败的回调
p.then(function(value){
    console.log(value);
},function(reason){
    console.log(reason)
})
```
![image](https://user-images.githubusercontent.com/47961027/209544079-fa466293-f0f6-4563-8fe1-e119cf9c935a.png)
#### promise读取文件
封装promise读取文件
需要使用到node的fs模块
前期准本
a.md 文件
![image](https://user-images.githubusercontent.com/47961027/209544107-f9e97c9e-97f9-4297-a6be-c932735da689.png)
##### 封装读取文件 promiseReadFile.js
```
// 读取文件
// 引入node 的 fs模块
const fs = require('fs');
// 直接调用fs模块的读取方法
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
```
![image](https://user-images.githubusercontent.com/47961027/209544165-57ada12f-fe35-461f-aaad-d82ac0ac4a6e.png)
分析：直接调用fs模块的readFile方法可以实现文件读取操作 但无法避免业务繁琐时的嵌套问题
但通过promise对象封装fs模块的readFile方法就可以避免业务繁琐时的多层嵌套问题
### Promise发送Ajax请求
#### ES5 发送ajax请求
```

// 创建XMLHttpRequest对象
const xhr = new XMLHttpRequest();
// 初始化
xhr.open('GET','https://api.apiopen.top/api/sentences');
// 发送请求
xhr.send();
// 绑定事件 处理响应结果
xhr.onreadystatechange = () =>{
    // 判断是否响应完成
    if(xhr.readyState===4){
        // 判断响应的状态码 200-299之间响应成功
        if(xhr.status>=200 && xhr.status<300){
            // 成功
            console.log(xhr.response);
        }else{
            console.error(xhr.status)
        }
    }
}

```
![image](https://user-images.githubusercontent.com/47961027/209544282-4cc5b643-a9a8-4d6c-8ad1-99a9feb2207b.png)
#### promise发送ajax请求
```
const pm = new Promise((resolve,reject) =>{;
    // 创建XMLHttpRequest对象
    const xhr = new XMLHttpRequest();
    // 初始化
    xhr.open('GET','https://api.apiopen.top/api/sentences');
    // 发送请求
    xhr.send();
    // 绑定事件 处理响应结果
    xhr.onreadystatechange = () =>{
        // 判断是否响应完成
        if(xhr.readyState===4){
            // 判断响应的状态码 200-299之间响应成功
            if(xhr.status>=200 && xhr.status<300){
                // 成功 修改promise的状态
                resolve(xhr.response);
            }else{
                // 执行失败 修改promise状态
                reject(xhr.status)
            }
        }
    }
})
// 调用promise对象
pm.then(v =>{
    // 成功
    console.log(v);
},reason=>{
    // 失败
    console.error(reason);
})
```
![image](https://user-images.githubusercontent.com/47961027/209544329-7fcf69d1-a44c-4384-af4f-f17b6dafc0df.png)
### promise的then详解
then方法的返回结果还是一个promise对象，该对象的状态是由调用函数执行结果决定的
如果回调函数中返回的执行结果是非promise类型的属性 例如 在then方法中直接return 123 
则Promise对象状态为成功
如果回调函数返回的执行结果是promise类型的属性 则内部的返回状态决定了外部promise对象的状态
也就是说虽然外部执行成功了 但内部如果返回失败 那么外部的promise执行状态仍然是失败的
另外 promise的then方法是可以链式调用的 就是pm.then(xx).then(xx).then(xx)
```
const pm = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        // 模拟执行成功
        resolve('读取到数据');
    },1000)
});
const res = pm.then(value=>{
    console.log(value);
    // 非promise对象
    // return 123;
    // 是promise对象
    return new Promise((resolve,reject)=>{
        return reject('读取失败');// rejected
    })
},reason=>{
    console.error(reason)// rejected
});
console.log(res);// fulfilled

// promise支持链式调用
// promise回调时可以只有一个成功的回调函数 也可以两个都有
pm.then(v=>{
    
}).then(v=>{
    
}).then(v=>{
    
},e=>{
    
})
```
![image](https://user-images.githubusercontent.com/47961027/209544486-20fcd740-7995-4430-a703-595755334103.png)
### promise读取多个文件练习
使用promise的then方法的链式调用完成多个文件的读取
注意 读取文件使用到node的fs模块 需要在js文件中使用
```
// 引入fs
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
// then方法链式调用

p.then(value=>{// value是第一次调用返回的数据
	return new Promise((resolve,reject)=>{ // 第二次读取
		fs.readFile('./resources/b.md',(err,data)=>{
			// 读取到的第二个文件内容 ，第一个是value 第二个内容是data
			resolve([value,data]);
		})
	})
}).then(value=>{
	return new Promise((resolve,reject)=>{// 第三次读取
		fs.readFile('./resources/c.md',(err,data)=>{
			// value是前两个文件读取的内容 然后追加上最后一个文件的内容即可
			value.push(data);
			resolve(value);
		})
	})
}).then(value=>{// 最后拼接
	// 使用换行符将三个文件内容拼接起来
	console.log(value.join('\r\n'))
})
```
![image](https://user-images.githubusercontent.com/47961027/209544548-e999133a-fbfb-419e-9b31-61061066e3b3.png)
### promise的catch方法
promise的catch方法是用来处理执行失败的方法，如果使用链式调用的话 可以结合catch方法让代码更加简洁
```
// promise catch基本使用
const pm = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        // 设置pm对象的状态为失败并设置失败的值
        reject("出错了");
    },1000);
});

// then方式回调
pm.then(value=>{},(reason)=>{
    console.log(reason);
});

pm.then(value=>{
    
}).catch(reason=>{
    console.warn(reason);
})

// 单独使用catch
pm.catch(eerr=>{
    console.error(eerr);
})
```
![image](https://user-images.githubusercontent.com/47961027/209544594-d6e15966-ddf9-4f4a-839c-82b89034006e.png)
## Set集合
ES6提供了新的数据解构 Set集合 类似于数组，但元素是唯一的
集合实现类iterator属性 因此可以使用for of 方式遍历集合
另外集合可以使用扩展运算符 ... 将元素展开
Set集合的常用方法
size  获取集合中元素个数
add	添加一个元素到集合中
delete 删除集合中的元素 返回boolean值
has 检测集合中是否包含某个元素 返回boolean值
clear 清空集合
### Set 集合基本使用
```
// 定义集合 直接初始化数据
let s = new Set(['A','B','D','F','C','A']);
console.log(s);// Set(5) {"A", "B", "D", "F", "C"}
// 添加数据
s.add('E');
console.log(s);//Set(6) {"A", "B", "D", "F", "C", …}
// 删除一个元素 足以 删除元素只能通过元素本身来删除 不能使用下标
s.delete('A');
console.log(s)// Set(5) {"B", "D", "F", "C", "E"}
// 遍历集合
for(let v of s){
    console.log(v)
}
// 清空集合
s.clear();
console.log(s)// Set(0) {}
```
### Set可以进行数组去重
```
let arr = [1,1,2,2,3,3,4,5,6];
let res = [...new Set(arr)];
console.log(res);// (6) [1, 2, 3, 4, 5, 6]
```
### 获取两个数组的交集
```
取两个数组的共有部分
let arr = [1,1,2,2,3,3,4,5,6];
let arr2 = [3,3,4,4,5,5];
let res2 = [...new Set(arr)].filter(item =>{
	let a2 = new Set(arr2);
	if(a2.has(item)){
		return true;
	}else{
		return false;
	}
})
console.log(res2) // (3) [3, 4, 5]
简化写法
let res3 = [...new Set(arr)].filter(item => new Set(arr2).has(item));
console.log(res3);// (3) [3, 4, 5]
```
### 获取两个数组的并集
```
两个数组合并
let arr = [1,1,2,2,3,3,4,5,6];
let arr3 = [7,7,8,8,9,9];
let u = [...new Set([...arr,...arr3])];
console.log(u)// (9) [1, 2, 3, 4, 5, 6, 7, 8, 9]
```
### 获取两个数组的差集
```
差集时必须要注意方向 谁与谁的差集 方向不同 结果不同
例如A为主体取与B的差集 那么B中没有A中的元素则为差集
let d1 = [1,1,2,2,3,3,4,4,5,6,7];
let d2 = [4,4,5,5,6,7,8];
// e => !(new Set(d2).has(e)) d1中的元素不在d2中
let diff = [...new Set(d1)].filter(e => !(new Set(d2).has(e)));
console.log(diff);//(3) [1, 2, 3]
```
## Map集合
ES6提供了Map键值对的数据解构，但Map中的键不限于字符串 各种类型的值(包括对象)都可以作为Map的键 
Map实现了iterator属性，因此可以使用扩展运算符 ... 和for of 
Map中属性和方法
size map中元素的个数
set 添加一个元素到map中
get 返回指定key的元素
has 是否包含某个key
chear 清空map
### Map的基本使用
```
// 定义map
const map = new Map();
// 添加元素
map.set('name','Tom');
map.set('age',12);
let score = {
      math:99,
      Physics:99
}
map.set('score',score);
map.set('test',function(){
      console.log('测试元素')
})
//遍历map
for(let v of map){
      console.log(v);
}
// 删除单个元素
map.delete('test');
console.log(map);
// 获取map大小
let count = map.size;
console.log(count)
// 清空map
map.clear()
console.log(map)
```
## Class类型
ES6中提供了Class作为对象模板，通过class关键字可以定义类，
在ES6中class可以看作是一个语法糖，他的绝大部分功能ES5都可以做到 使用class只是让对象原型的写法更加清晰，更像面向对象的变成语法而已
### class的基本使用
```
// ES5 创建自定义对象
function Phone(brand,price){
      this.brand = brand;
      this.price = price;
}
// 向对象中添加方法
Phone.prototype.usePhone = function(){
      console.log('使用手机的方法')
}
// 实例化自定义对象
let iphone = new Phone('IPHONE16',999999.99);
// 调用自定义对象中的userPhone方法
iphone.usePhone();
// 获取整个phone的对象
console.log(iphone);

// ES6 使用class自定义对象
// 定义对象
class Phone2{
      // 构造方法 注意 构造方法只能有一个 无论是有参还是无参
      constructor(brand,price){
            this.brand=brand;
            this.price=price;
      }
      // 添加方法
      usePhone(){
            console.log('使用手机的方法');
      }
}
// 调用Phone2对象中的方法
let iphone8 = new Phone2('IPHONE8',9999.88);
iphone8.usePhone();
console.log(iphone8)
```
![image](https://user-images.githubusercontent.com/47961027/209544899-c3b4891d-d0ce-402a-9581-1dd428d1c116.png)
### Class静态成员
ES5或ES6中 对象的静态成员只属于对象 不属于实例
与Java中一样 静态成员是通过对象直接调用
```
// ES5 静态成员
function Phone(){
      
}
// 向Phone对象添加属性 - 静态
Phone.name = 'IPHONE7';
// 添加方法- 静态
Phone.usePhone = function(){
      console.log("使用手机的方法1");
}
// 获取添加的属性
let iphone7 = new Phone();
// 静态属性只能通过对象本身获取
console.log(iphone7.name); // undefined
console.log(Phone.usePhone()); 
// 向对象中添加普通属性 使用prototype
Phone.prototype.size = '7inch';
// 获取对象的普通属性  - 普通属性只能通过对象的实例获取
console.log(iphone7.size)//7inch

// ES6 添加静态成员 使用static关键字标注
// 静态成员是属于对象的 不能通过实例获取
class Phone2{
      static name = 'IPHONE8';
      static usePhone(){
            console.log('使用手机的方法2');
      }
}
let iphone12 = new Phone2();
// 获取静态成员 - 静态成员只能通过对象本身调用
console.log(iphone12.name) // undefined
console.log(Phone2.name); // IPHONE8
```
![image](https://user-images.githubusercontent.com/47961027/209544932-25cc9ebc-4d8d-4622-bb15-01ab4105e04a.png)
## 对象的继承
### ES5中对象的继承
ES5中对象的继承通过调用父对象call方法实现
```
// ES5中对象的继承
// 创建父对象
function Phone(brand,price){
      this.brand = brand;
      this.price = price;
}
// 给父对象添加非静态方法
Phone.prototype.sendMsg = function(){
      console.log('发消息的功能');
}
// 创建子类
function SmartPhone(brand,price,color,size){
      // 继承父类
      Phone.call(this,brand,price);
      // 实现子类独有的属性
      this.color=color;
      this.size=size;
}
// 设置子类构造函数原型 必须要设置
SmartPhone.prototype = new Phone;
// 校正继承 可以省略
SmartPhone.prototype.constructor=SmartPhone;
// 向子类添加方法
SmartPhone.prototype.phone = function(){
      console.log('存储照片的功能');
}
// 向子类添加方法
SmartPhone.prototype.netword = function(){
      console.log('网上冲浪的方法');
}
// 实例化子类
let iphone = new SmartPhone('iphone8',999,'红色','7inch');
console.log(iphone);
// 调用父类的发送消息方法
iphone.sendMsg();
```
![image](https://user-images.githubusercontent.com/47961027/209544967-fbf88ad4-768f-4de9-9ddf-cbd65a056da2.png)
### ES6对象继承
ES6中继承父类使用extends关键字
```
// ES6中对象的继承
class Phone{
      // 构造方法
      constructor(brand,price){
            this.brand = brand;
            this.price = price;
      }
      // 成员方法
      usePhoto(){
            console.log('使用相册的方法');
      }
      sendMsg(){
            console.log('发送消息的方法');
      }
}
// 创建子类并继承父类 使用extends关键字
class SmartPhone extends Phone{
      // 构造方法
      constructor(brand,price,color,size){
            // 调用父类构造方法 相当于ES5 Phone.call(this,brand,price,coloe,size)
            super(brand,price);
            // 子类独有
            this.color = color;
            this.size = size;
      }
      // 子类的成员方法
      netWork(){
            console.log('网上冲浪');
      }
}
// 实例化子类
let iphone = new SmartPhone('iphone7',999,'RED',8);
console.log(iphone)
// 调用子类本身的方法
iphone.netWork();
// 调用父类方法
iphone.usePhoto();
iphone.sendMsg();

```
![image](https://user-images.githubusercontent.com/47961027/209545079-4ad0c3a6-a08f-4550-a1ff-20ab04df52b6.png)
### ES6中子类对父类方法的重写
所谓的子类重写父类的方法 其实就是子类中写一个与父类重名的方法
子类调用与父类重名的方法时 如果子类中存在 则使用子类的 不存在才会找父类的
在创建子类实例调用该方法时 也是调用的子类本身的方法 而非父类中的方法
目前ES6无法实现子类对父类中发放的重写 只能通过上述方式实现
```
// ES6中对象的继承
class Phone{
      // 构造方法
      constructor(brand,price){
            this.brand = brand;
            this.price = price;
      }
      // 成员方法
      usePhoto(){
            console.log('使用相册的方法');
      }
      sendMsg(){
            console.log('发送消息的方法');
      }
}
// 创建子类并继承父类 使用extends关键字
class SmartPhone extends Phone{
      // 构造方法
      constructor(brand,price,color,size){
            // 调用父类构造方法 相当于ES5 Phone.call(this,brand,price,coloe,size)
            super(brand,price);
            // 子类独有
            this.color = color;
            this.size = size;
      }
      // 子类的成员方法
      netWork(){
            console.log('网上冲浪');
      }
      sendMsg(){
            console.log('子类中的发送消息方法');
      }
}
// 实例化子类
let iphone = new SmartPhone('iphone7',999,'RED',8);
console.log(iphone)
// 调用子类本身的方法
iphone.netWork();
// 调用父类方法
iphone.usePhoto();
iphone.sendMsg();
```
![image](https://user-images.githubusercontent.com/47961027/209545109-9a9fc81e-f664-4482-95b2-0029084c00f7.png)
## get&set
```
// get set
class User{
      set name(name){
            console.log('设置name属性')
      }
      get name2(){
            console.log('获取name属性')
            return 'abcd';
      }
}

let u = new User();
u.name='Tom';
// 获取值
u.name2;
```
![image](https://user-images.githubusercontent.com/47961027/209545153-15732e86-8fb9-40ba-9137-6481397e4a96.png)
## 数值扩展
### Number.EPSILON
是JS用来表示最小精度值
EPSILON 值接近于2.22
该属性可以用来验证浮点数计算
```
console.log(0.1+0.2);// 0.30000000000000004
console.log(0.1+0.2 == 0.3) // false
// 自定义比较
function equal(a,b){
	if(Math.abs(a-b) < Number.EPSILON){
		return true;
	}
	return false;
}
console.log(equal(0.1+0.2,0.3)) // true
```
![image](https://user-images.githubusercontent.com/47961027/209545198-c1be97f2-0839-4a20-bdd9-4c0cd5dccea7.png)
### Number相关属性
```
// Number.isFinite 判断一个数是否是有限数
console.log(Number.isFinite(100));// true
console.log(Number.isFinite(10*0));// true
console.log(Number.isFinite(10/0)); // false
console.log(Number.isFinite(Infinity));// false
// Number.isNaN 判断是不是数值
console.log(Number.isNaN('A'));// false
console.log(Number.isNaN(true));// false
console.log(Number.isNaN(99));// true
// Number.parseInt Number.parseFloat 转换数值类型
console.log(Number.parseInt('123AAA'));// 123
console.log(Number.parseFloat('1.234FFF'));// 1.234
// Number.isInteger 判断是否是整数
console.log(Number.isInteger(1.2));// false
console.log(Number.isInteger(99));// true
console.log(Number.isInteger('123'))// false
```
### Math相关属性
```
// Math.trunc 将小数部分抹掉 不会四舍五入
console.log(Math.trunc(3.8));// 3
// 判断正负数 正数返回1 负数返回-1 0返回0
console.log(Math.sign(100));// 1
console.log(Math.sign(-100));// -1
console.log(Math.sign(0));// 0
```
### 二进制和八进制
```
// 二进制 0b开头
let b = 0b1011; // 11
console.log(b);
// 八进制 0o开头
let o = 0o777; // 511
console.log(o)
// 十进制 直接写
let d = 100;
// 十六进制 0x开头
let x = 0xff; // 255
console.log(x);
```
![image](https://user-images.githubusercontent.com/47961027/209545283-a62c5474-4378-46e6-ab4c-1e004815f82f.png)
## Object对象方法扩展
```
// Object.is 判断两个对象是否完全相等
console.log(Object.is('A','a'));// false
console.log(Object.is(99,99)); // true
// NaN与任何属性比较都是false 包括自身 Object.is除外
console.log(Object.is(NaN,NaN)); // true
console.log(NaN === NaN); // false
console.log(NaN == NaN); // false
// Object.assign 对象合并 
// 就是指定谁覆盖谁
let u1 = {
      name:'Tom',
      age:12,
      email:'Tom@usa.com'
}
let u2 = {
      name:'Jerry',
      age:12,
      e:'jerry'
}
// console.log(Object.assign(u1,u2));// {name: "Jerry", age: 12, email: "Tom@usa.com"}
console.log(Object.assign(u2,u1));//{name: "Tom", age: 12, e: "jerry", email: "Tom@usa.com"}
// Object.setPrototypeOf 设置对象的原型 Object.getPrototypeOf 获取对象的原型
const user1 = {
      name:'Tom',
      age:12
}
const country = {
      xxx:['USA']
}
// 设置user1对象的proto原型
Object.setPrototypeOf(user1,country);
console.log(Object.getPrototypeOf(user1));// {xxx: Array(1)}
console.log(user1);// {name: "Tom", age: 12}
```
![image](https://user-images.githubusercontent.com/47961027/209545330-d154fb1f-9ae3-4a71-892c-846ab2aadc2b.png)
## 模块化
模块化指的是将一个大的程序拆分成若干个小的模块 最后将其组合起来
ES6才开始提供模块化，ES6之前没有统一的规范
优势
可以防止命名冲突，提高代码复用，便于维护
### ES6模块化语法
ES6模块化由两个命令构成 export 和 import
export是对外暴漏接口 就是对外提供调用
import 是导入其它模块的指令
```
<script type="module">
      import * as A1 from './js/m1.js'
      console.log(A1.name)
</script>
```
![image](https://user-images.githubusercontent.com/47961027/209545400-df2253bd-a2c6-48f8-a495-d472d8af5a98.png)
### 统一暴漏
统一暴漏就是在js文件末尾使用export将需要对外提供的属性和方法暴漏出去
```
let name2 = 'tom';
function fn2(){
	console.log('m2.js');
}
// 统一暴漏
export {name2,fn2}
调用js内容
import * as A2 from './js/m2.js'
console.log(A2)
```
![image](https://user-images.githubusercontent.com/47961027/209545440-02e48d79-4c55-4230-910e-b4edff48fd82.png)
### 默认暴漏
默认暴漏是使用export default{ 需要暴漏的属性和方法}对外暴漏
```
export default{
	name:'Jerry',
	show: function(){
		console.log('默认暴漏语法')
	}
}
调用js内容
import A3 from './js/m3.js'
console.log(A3);
// 调用默认暴漏模块的内容时需要添加default属性
A3.show();
console.log(A3.name)
```
![image](https://user-images.githubusercontent.com/47961027/209545471-19c60976-531f-4f70-89da-024856921a9d.png)
## 引入模块语法
统一方式 语法
import * as 别名 from ‘需要引入的js文件’
解构赋值方式 语法
import {需要引入的属性和方法} from ‘需要引入的js文件’
简单形式 语法 
注意 简单形式只能针对默认暴漏
import {default as 别名} from ‘需要引入的js文件‘
```
// 通用引入模块语法
// 分别暴漏引入模块
import * as A1 from './js/m1.js'
// 统一暴漏引入模块
import * as A2 from './js/m2.js'
// 默认暴漏引入模块
import * as A3 from './js/m3.js'
console.log(A3.default.name)

// 解构赋值方式引入模块语法
// 分别暴漏引入模块
import {name,fn} from './js/m1.js'
console.log(name,fn);
// 统一暴漏引入模块 如果多个引入出现重名 可以使用as+别名方式区分
import {name2,fn2} from './js/m2.js'
console.log(name2)
// 默认暴漏引入模块 default是一个对象 必须使用别名
import {default as n} from './js/m3.js'
console.log(n)

// 简便形式 只针对默认暴漏
import M1 from './js/m3.js'
console.log(M1.name);
```
### 暴漏模块语法
模块化语法就是将js中的内容 通过export对外进行暴漏，然后使用的地方通过import进行引入即可
暴漏的方式有三种
分别暴漏
指的是在js中将对外提供的属性和方法分别使用export进行暴漏
例如
export name=’xxx’;
export function fn(){}
统一暴漏
指的是将js中的内容统一的对外提供 使用export{要对外进行暴漏的函数名或方法名 多个使用逗号隔开}
例如
name=’tom’,
age=12,
function fn(){}
export {name,age,fn}
默认暴漏
指的是使用export default{}方式对外进行暴漏
例如
export default{
name:’jerry’,
show:function fn(){}
}
### 引入模块语法总结
```
// 通用引入模块语法
// 分别暴漏引入模块
import * as A1 from './js/m1.js'
// 统一暴漏引入模块
import * as A2 from './js/m2.js'
// 默认暴漏引入模块
import * as A3 from './js/m3.js'
console.log(A3.default.name)

// 解构赋值方式引入模块语法
// 分别暴漏引入模块
import {name,fn} from './js/m1.js'
console.log(name,fn);
// 统一暴漏引入模块 如果多个引入出现重名 可以使用as+别名方式区分
import {name2,fn2} from './js/m2.js'
console.log(name2)
// 默认暴漏引入模块 default是一个对象 必须使用别名
import {default as n} from './js/m3.js'
console.log(n)

// 简便形式 只针对默认暴漏
import M1 from './js/m3.js'
console.log(M1.name);
```
## 模块化二
模块化2是针对模块化1中页面的js代码过多的一个优化
在模块化1中 需要通过script标签指的type=module方式 引入需要的js模块
这种方式如果一个页面需要引入大量的js文件则会变得非常庞大 此时针对这种方式进行优化
思路：
新建一个入口的js文件 然后在入口的js文件中使用import引入其它模块文件 
然后页面通过script标签引入即可 需要注意语法格式
```
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
页面引入
<script src="./js/app.js" type="module"></script>

```
![image](https://user-images.githubusercontent.com/47961027/209545748-f202b99d-ead2-4113-8035-1174377c32d1.png)
## 模块化代码转换
模块化代码转换指的是借助工具(Babel)将ES6语法转换成ES5语法，这样做到目的是为了避免有些浏览器对ES6的支持欠佳问题
Babeljs是一个JS编辑器 可以将ES6语法转换成ES5语法格式
网址 https://www.babeljs.cn/

### 安装Babel
babel-cli 命令行工具
babel-preset-env 预设包 可以将ES6的特性转换成ES5格式
browserify 打包工具(这个打包工具要比webpack简单些 不需要单独配置)
1. 初始化项目
npm init --yes
![image](https://user-images.githubusercontent.com/47961027/209545815-c6feb159-e9d9-415e-9d79-4fb6ca1b7e7d.png)
2. 安装转换工具
-D表示开发依赖
npm i babel-cli babel-preset-env browserify -D
![image](https://user-images.githubusercontent.com/47961027/209545837-aedfe031-f133-40cb-85f9-7ba97ee1da04.png)
3. 对js进行转换
工具如果是局部安装 使用npx bebal 如果是全局安装 可以直接使用babel
npx babel js -d dist/js --presets=babel-preset-env
命令解释 
babel 后边的js 是js源文件的目录 -d 后边跟的是转换后存放的目标目录
--presets=babel-preset-env 将ES6换行成ES5语法
![image](https://user-images.githubusercontent.com/47961027/209545866-320ef29b-ce36-4fe8-8db6-e73edcbd91c7.png)
4. 打包
对转换好的js文件进行打包 否则页面无法直接引用
npx browserify dist/js/app.js -o /main.js
-o表示输出
![image](https://user-images.githubusercontent.com/47961027/209545910-81408491-026a-4a5b-b245-4dfcf22ce0fe.png)
5. 页面引入打包好的js
```
<script src="./dist/main.js"></script>
```
![image](https://user-images.githubusercontent.com/47961027/209545938-99fbefd1-60e2-45aa-9ca1-2104ebf168c3.png)
6. 修改源文件后需要重新打包
修改了源文件后需要重新打包
执行指令如下
转换
ES6转ES5
npx babel js -d dist/js --presets=babel-preset-env
打包
npx browserify dist/js/app.js -o /main.js
7. NPM包的使用
例如使用jquery包改变页面的背景色
7.1 首先需要安装jquery包
npm i jquery
![image](https://user-images.githubusercontent.com/47961027/209545986-3a07e9af-4e50-4fbe-95da-3d8395320dd3.png)
7.2 源文件中引入jquery包
// 引入jquery模块 JQuery222变量名通常使用$符号代替 导入时使用的是什么 下边使用必须一致
import JQuery222 from 'jquery';// 相当于 const JQuery = require('jquery')
 // 改变页面背景色
 JQuery222('body').css('background-color','pink');
![image](https://user-images.githubusercontent.com/47961027/209546021-41c14eb8-c3fb-498d-a1d5-2221bbbcda81.png)
7.3 转换语法格式并打包
npx babel js -d dist/js --presets=babel-preset-env
npx browserify dist/js/app.js -o /main.js
![image](https://user-images.githubusercontent.com/47961027/209546044-3e00262a-8a9f-4d2a-8a63-077c1e5de3fe.png)
![image](https://user-images.githubusercontent.com/47961027/209546052-c2399fcd-868b-496b-84ea-96d371ac3c19.png)































































































































