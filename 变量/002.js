// 一、for 循环中变量声明
// 1.1 let
for (let i=0; i<5; i++)
{
    console.log(i)
}
console.log(i)

for (var i=0; i<5; i++)
{
    console.log(i)
}
console.log(i)

for (let i =0; i<5; i++)
{
    setTimeout( () => console.log(i), 0)
}

for (var i =0; i<5; i++)
{
    setTimeout( () => console.log(i), 0)
}
