var a = "a"
console.log(a)

function testa()
{
    var b = "b" // 函数作用域
    console.log(b)
}
testa()
// console.log(b) // 报错 undefined

function testb()
{
    c = "c"
    console.log(c)
}
testb()
console.log(c)


if (true) {
    let d = "d"
    console.log(d)
}
// console.log(d)

if (true) {
    var e = "e"
    console.log(e)
}
console.log(e)
