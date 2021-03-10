// 创建数组 使用构造函数
let colors1 = new Array()
let colors2 = new Array(20);
let colors3 = new Array("red", "blue", "green")

// 创建数组 使用字面量
let colors4 = ["red", "blue", "green"]
let nams = [];
let values = [1, 2,]


console.log(Array.from("Matt"));

const m = new Map().set(1, 2)
console.log(m)

const s = new Set().add(1)
console.log(s)


function getArgsArray() {
    return Array.from(arguments)
}

console.log(getArgsArray(1, 2, 3, 4))

const arrayLikeObject = {
    0: 1,
    1: 2,
    2: 3,
    3: 4,
    length: 4
}
console.log(Array.from(arrayLikeObject))

const a1 = [1, 2, 3, 4]
const a2 = Array.from(a1, x => x ** 2)
const a3 = Array.from(a1, function (x) {
    return x ** this.exponent
}, {exponet: 2})
console.log(a2)
console.log(a3)


