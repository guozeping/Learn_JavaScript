const zeros = [0, 0, 0, 0, 0]
zeros.fill(5,2,4)
console.log(zeros)

const one = [1,1,1,1,1]
one.fill(5)
console.log(one)

const two = [2,2,2,2,2]
two.fill(8, -4, -1)
console.log(two)


// 指定范围浅复制
let ints
    reset = () => ints = [0,1,2,3,4,5,6,7,8,9]
reset()

ints.copyWithin(6);
console.log(ints)
reset()

ints.length = 12;
ints.copyWithin(6);
console.log(ints)

ints.copyWithin(0,5)  // 复制索引5开始的内容，插入到索引0开始的位置
console.log(ints)

ints.copyWithin(4,0,3) // 复制索引0开始到索引3结束的内容，插入到索引4开始的位置
console.log(ints)


