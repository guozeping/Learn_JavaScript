// ECMAScript函数的参数在内部表现为一个数组。函数被调用时总会接收一个数组，但函数并不关心这个数组包含什么
// 。如果数组中什么也没有，那没问题；如果数组的元素超出了要求，那也没问题。
function sayHi(name, message) {
    console.log(arguments[0] + arguments[1])
}

sayHi('gzp', 'say')


function howManyArgs() {
    console.log(arguments.length)
}

howManyArgs(45);
howManyArgs();
howManyArgs(12, 12);

function doAdd() {
    if (arguments.length === 1) {
        console.log(arguments[0] + 10)
    } else if (arguments.length === 2) {
        console.log(arguments[0] + arguments[1])
    }
}

doAdd(10)
doAdd(10, 20)

// 箭头函数中的参数
let bar = () => {
    console.log(arguments[0])
}

bar(5);



