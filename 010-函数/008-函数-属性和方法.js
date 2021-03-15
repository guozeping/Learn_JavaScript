function sayName(name){
    console.log(name)
}

console.log(sayName.length)

// 2. apply
function sum(num1,num2){
    return num1 + num2;
}

function callSum1(num1,num2)
{
    return sum.apply(this,arguments)
}

function callSum2(num1,num2){
    return sum.apply(this,[num1,num2])
}

console.log(callSum1(10,10))
console.log(callSum2(10,10))

// 3. call
function sum1(num1, num2)
{
    return num1 + num2
}
function callSum3(num1,num2)
{
    return sum1.call(this,num1, num2)
}
console.log(callSum3(10,10))

