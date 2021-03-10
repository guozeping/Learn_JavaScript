// 数组复制
const a1 = [1, 2, 3, 4]
const a2 = Array.from(a1)

console.log(a2)
console.log(a1 === a2)

const iter = {
    * [Symbol.iterator]() {
        yield 1;
        yield 2;
        yield 3;
        yield 4;
    }
}
console.log(Array.from(iter));
