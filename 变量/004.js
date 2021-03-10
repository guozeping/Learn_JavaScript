// 复制值
let num1 = 5;
let num2 = num1;
// num1 和 num2 的值是相互独立的，这俩个变量可以独立使用

let obj1 = new Object();
let obj2 = obj1;
obj1.name = "gzp"
console.log(obj2.name)  // 引用赋值

