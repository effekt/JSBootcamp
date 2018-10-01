const rl = require('readline-sync');

let userInput = rl.question("Enter some input: ");
console.log(userInput);

console.log(typeof userInput);

let y = '';
if (true) {
    y = "hello";
} else {
    y = "world";
}

y = (5 > 4) ? "hello" : "world";