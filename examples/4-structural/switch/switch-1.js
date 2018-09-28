/**********************************************************************
* FILENAME: switch-1.js                             FILEVER: 1.0
*
* DESCRIPTION:
*   Simple decision making with the use of a switch statement
*
* AUTHOR: Jesse Wheeler                             DATE: 22 Sept 18
*
**/

const rl = require('readline-sync');

let showSomething = rl.question("Please enter a number between 1-3 inclusive: ");
showSomething = parseInt(showSomething);

switch(showSomething) {
    case 1:
        console.log("You chose what's behind door #1!");
        break;
    case 2:
        console.log("You chose what's behind door #2!");
        break;
    case 3:
        console.log("You chose what's behind door #3!");
        break;
    default:
        console.log("You didn't follow the instructions.");
}
