let numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1]
console.log(numbers.indexOf(4))  // 左 向 右
console.log(numbers.lastIndexOf(4))  // 右 向 左
console.log(numbers.includes(4))  // 包含

console.log(numbers.indexOf(4, 4))
console.log(numbers.lastIndexOf(4, 4))
console.log(numbers.includes(4, 7))

const people = [
    {
        name: 'gzp',
        age: 27
    },
    {
        name: 'gzp',
        age: 29
    }
]

console.log(people.find((element, index, array) => element.age < 28))




