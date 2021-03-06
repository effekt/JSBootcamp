/**********************************************************************
* FILENAME: while-1.js                              FILEVER: 1.0
*
* DESCRIPTION:
*   Demonstration of a while with user input, repeating until
*   the user enters a number between 1 & 10 inclusively.
*
* AUTHOR: Jesse Wheeler                             DATE: 27 Sept 18
*
**/

const rl = require('readline-sync');
let userInput = +rl.question("Enter a number between 1 & 10 inclusive: ");

while(userInput < 1 || userInput > 10 || isNaN(userInput)) {
    userInput = +rl.question("Enter a number between 1 & 10 inclusive: ");
    //Using unary addition for quick typecasting
}
console.log("The user entered: " + userInput);
