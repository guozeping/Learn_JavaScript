// concat
let colors = ["red", "green", "blue"]
let colors2 = colors.concat("yellow")  // 创建一个新的数组
let colors3 = colors.concat(["yellow", "black"])
console.log(colors2)
console.log(colors3)

let colors4 = ["red", "green", "blue"]
let newcolors = ["black", "brown"]
let morenewcolorss = {
    [Symbol.isConcatSpreadable]: true,
    length: 2,
    0: "pink",
    1: "cyan"
}

let colors5 = colors4.concat(morenewcolorss)
console.log(colors5)


console.log("强制不打平数组")
newcolors[Symbol.isConcatSpreadable] = false
let colors6 = colors4.concat("yellow", newcolors)
console.log(colors6)


// slice
let colors7 = ['red', 'green', 'blue', 'yellow', 'black']
let colors8 = colors7.slice(1)
let colors9 = colors7.slice(1,4)
console.log(colors8)  
console.log(colors9)


