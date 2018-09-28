/**********************************************************************
* FILENAME: if-3.js                                 FILEVER: 1.0
*
* DESCRIPTION:
*   Using parseInt to attempt a conversion on our input to a number.
*
* AUTHOR: Jesse Wheeler                             DATE: 22 Sept 18
*
**/

const rl = require('readline-sync');

let whatType = rl.question("Input the number 3: ");
console.log(typeof whatType);

whatType = parseInt(whatType); //Attempt to parse our input to a number

if (whatType === 3) {
    //Strict equality
    console.log("3 was entered and its type is number.");
} else if (whatType == 3) {
    //Loose equality
    console.log("3 was entered, but its type might not be a number.");
} else if (isNaN(whatType)) {
    //You didn't enter a number
    console.log("You didn't enter a number.");
}
console.log(3 + whatType);