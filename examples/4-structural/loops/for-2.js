/**********************************************************************
* FILENAME: for-2.js                                FILEVER: 1.0
*
* DESCRIPTION:
*   Factorials using if statements and for loops.
*
* AUTHOR: Jesse Wheeler                             DATE: 25 Sept 18
*
**/

const rl = require('readline-sync');
let factorial = rl.question("Enter a number > 0: ");
factorial = parseInt(factorial); //Attempt to parse our input to a number

if (isNaN(factorial)) {
    console.log("You did not enter a number.");
} else if (factorial < 0) {
    console.log("You entered a negative number.");
} else if (factorial === 0) {
    console.log("Factorial of 0: 1");
} else {
    let sum = 1;
    for (let i = 1; i <= factorial; i++) {
        //Multiply our sum by current value of i
        sum *= i;
    }
    console.log("Factorial of " + factorial + ": " + sum);
}