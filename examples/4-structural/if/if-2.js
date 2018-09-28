/**********************************************************************
* FILENAME: if-2.js                                 FILEVER: 1.0
*
* DESCRIPTION:
*   An example of decision making using if / else if / else statements
*   with nesting.
*
* AUTHOR: Jesse Wheeler                             DATE: 22 Sept 18
*
**/

const rl = require('readline-sync');
const MAX_DISCOUNT = .15;
const MID_DISCOUNT = .12;
const MIN_DISCOUNT = .10;

let amount = rl.question("Please enter how much was spent: $");
let items = rl.question("Please enter how many items were purchased: ");

if (amount >= 500 && items >= 5) {
    //The user spent at least $500 and purchased more than 5 items.
    console.log("Your discount is: " + (MAX_DISCOUNT * 100) + "%");
    console.log("Your total: $" + (amount * (1 - MAX_DISCOUNT)));
} else if (amount >= 250) {
    //If the user spent at least $250.
    if (items >= 10) {
        //If the user purchased at least 10 items.
        console.log("Your discount is: " + (MAX_DISCOUNT * 100) + "%");
        console.log("Your total: $" + (amount * (1 - MAX_DISCOUNT)));
    } else {
        //If the user purchased less than 10 items.
        console.log("Your discount is: " + (MID_DISCOUNT * 100) + "%");
        console.log("Your total: $" + (amount * (1 - MID_DISCOUNT)));
    }
} else {
    //The user spent less than $250.
    console.log("Your discount is: " + (MIN_DISCOUNT * 100) + "%");
    console.log("Your total: $" + (amount * (1 - MIN_DISCOUNT)));
}