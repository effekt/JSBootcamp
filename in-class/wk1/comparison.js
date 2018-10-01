let x = 5;
let y = "5";

if (x == y) {
    console.log("x == y");
}

if (x === y) {
    console.log("x === y");
}

let z = "hello" && "world";
console.log(z);

z = "hello" && NaN && "world";
console.log(z);

z = "hello" || "world";
console.log(z);

z = 0 || true;

if (!NaN) {
    console.log("!NaN");
}

if (!"") {
    console.log("!''");
}

if (!0 && !false && !NaN && !"" && !null && !undefined) {
    console.log("It's all true!");
}