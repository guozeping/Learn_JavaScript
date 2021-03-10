let values = [1,2,3,4,5]
let sum = values.reduce((prev, cur, index,array)=> prev + cur)
console.log(sum)

let sum1 = values.reduceRight((prev, cur, index, array) => prev + cur)
console.log(sum1)
