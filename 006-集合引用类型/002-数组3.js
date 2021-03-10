// 数组索引
let colors = ["red", "blue", "green"];
console.log(colors[0])
colors[2] = "black";
colors[3] = ["brown"];
console.log(colors)

colors.length = 2;
console.log(colors)

colors.length = 4;
console.log(colors)

colors[99] = "black"
console.log(colors.length)
console.log(colors)


// 迭代器方法
const a = ["foo","bar","baz","qux"]

const akeys = Array.from(a.keys())
const aValues = Array.from(a.values())
const aEntries = Array.from(a.entries())
console.log(akeys)
console.log(aValues)
console.log(aEntries)



