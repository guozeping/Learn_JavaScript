const name="guozeping"
console.log(name)

// 已经定义name 
// const name="gzp"
// console.log(name) SyntaxError: Identifier 'name' has already been declared


// const 声明块作用域
if (true) {
    const name = "guozeping"
}
console.log(name) // 


// const 声明的限制只适用于它指向的变量的饮用。
const person = {}
person.name = "guozeping"
console.log(person)

// const 对for循环只创建新变量 
let i = 0;
for (const j=5; i<5; ++i)
{
    console.log(j)
}
