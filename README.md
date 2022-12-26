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


































