let colors = new Array();
let count = colors.push("red","green")
console.log(count)
console.log(colors)

let item = colors.shift()
console.log(item)  // red

let count2 = colors.unshift("black")
console.log(count2)
console.log(colors) //[ 'black', 'green' ]

