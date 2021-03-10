const m = new Map();

const m1 = new Map(
    [
        ["key1", "val1"],
        ["key2", "val2"],
        ["key3", "val3"]
    ]
)
console.log(m1.size)

m.set("fistname","gzp")
console.log(m)
console.log(m.size)
console.log(m.get("fistname"))
m.clear()
console.log(m)

console.log(m1)

m1.forEach((val,key) => console.log(key,val))

for (let key of m1.keys()){
    console.log(key)
}
