let person1 = new Object();
person1.name = "gzp"
person1.age = 26
console.log(person1)

let person2 = {
    "name": 'gzp',
    'age': 26
}
console.log(person2)


let person3 = {}
person3.name = "gzp"
person3.age = 26
console.log(person3)

function displayinfo(args) {
    let output = "";
    if (typeof args.name == "string") {
        output += "Name" + args.name + "\n";
    }
    if (typeof args.age == "number") {
        output += "Age:"  + args.age + "\n"
    }
    console.log(output)
}
displayinfo({
    name:'gzp',
    age:26
})

displayinfo({
    name:"guozeping"
})

let person = {
    "name":"guozeping"
}
console.log(person['name'])
