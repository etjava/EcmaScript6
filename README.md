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



















