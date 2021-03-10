let arrowSum = (a,b) => {return a + b}
let sum1 = arrowSum(1,2)
console.log(sum1)

let double = (x) => {return 2 * x}
console.log(double())

let triple = x => {return 3 * x}
console.log(triple())

let getRandom = () => {return Math.random()}
console.log(getRandom())

let sum2 = (a,b) => {return a+b}
console.log(sum2(1,2))

let value = {}
let setName = (x) => x.name = 'gzp'
let name = setName(value)
console.log(name)
