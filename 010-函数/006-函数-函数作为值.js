function callSomeFunction(someFunction, someArgument) {
    return someFunction(someArgument)
}

function add10(num) {
    return num + 10
}

let result1 = callSomeFunction(add10, 10)
console.log(result1) // 20
