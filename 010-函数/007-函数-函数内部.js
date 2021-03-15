function factorial(num){
    if (num < 1) {
        return 1;
    }else {
        return num * arguments.callee(num -1);
    }
}

let sum = factorial(8)
console.log(sum)


// this
window.color = "red"
let o = {
    color: 'blue'
}
function sayColor() {
    console.log(this.color)
}

sayColor()

// 在箭头函数中，this引用的是定义箭头函数的上下文。



// caller




// new.target


