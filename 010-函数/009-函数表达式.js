// 创建函数第一种方式是函数声明
// function functionName(arg0, arg1, arg2){
//     // 函数体
// }
//
// // 第二种创建函数的方式是函数表达式
// let functionName = function (arg0, arg1,arg2){
//     // 函数体
// }

// 会报错
// sayHi();
// let sayHi = function () {
//     console.log("Hi")
// }

let sayHi;
condition = true
if (condition)
{
    sayHi = function () {
        console.log("Hi")
    }
}else
{
    sayHi = function (){
        console.log("Yo");
    }
}



