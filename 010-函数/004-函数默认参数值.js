function makeKing1(name="Henry")
{
    return `King ${name} VIII`
}

console.log(makeKing1('guozeping'))
console.log(makeKing1())

function makeKing2(name = 'Henry', numerals = 'VIII'){
    return `King ${name} ${numerals}`
}
console.log(makeKing2())
console.log(makeKing2('Louis'))
console.log(makeKing2(undefined, 'VI'))
