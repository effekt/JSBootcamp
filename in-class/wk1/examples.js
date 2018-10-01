var x = 35;
let y = 37;
const z = 38;

console.log(x);

var thisIsVar = 37;
let thisIsLet = 36;

if (thisIsLet) {
    let thisIsLet = 50;
    console.log(thisIsLet);
}

if (true) {
    console.log(thisIsLet);
    thisIsLet = "hello";
}

if (true) {
    var thisIsVar = "world";
    console.log("thisIsVar: " + thisIsVar);
}

console.log("thisIsVar on outside: " + thisIsVar);
console.log(thisIsLet);