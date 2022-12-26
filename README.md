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
常量定义的数组及对象中元素可以被修改但仅限于修改数组或对象的中的元素 如果是修改常量的值是不允许的
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



























