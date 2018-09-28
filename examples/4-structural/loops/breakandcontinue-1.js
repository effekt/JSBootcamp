/**********************************************************************
* FILENAME: breakandcontinue-1.js                   FILEVER: 1.0
*
* DESCRIPTION:
*   Demonstration of the use of break and continue using a do-while
*   and a for loop.
*
* AUTHOR: Jesse Wheeler                             DATE: 27 Sept 18
*
**/

const rl = require('readline-sync');
let userInput = 0;

do {
    console.log("\nSelect an option:");
    console.log("1. Display a message and exit.");
    console.log("2. Skip to the next iteration.");
    console.log("0. Exit.");
    userInput = +rl.question("Option: ");

    if (isNaN(userInput) || userInput < 0 || userInput > 2) {
        console.log("You did not enter a valid option.");
        continue;
    } else if (userInput === 1) {
        console.log("You chose option 1.");
        break;
    } else if (userInput === 2) {
        continue;
    }
    console.log("Thanks for playing!");
    break;
} while(true);
