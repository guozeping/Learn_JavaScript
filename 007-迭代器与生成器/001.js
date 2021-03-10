let arr = ['foo','bar']
console.log(Symbol.iterator)

let iter = arr[Symbol.iterator]()
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())

let arr1 = ['foo','bar']
let iter1 = arr[Symbol.iterator]()
console.log(iter1.next())
arr1.splice(1,0,'bar')
console.log(iter1.next())
