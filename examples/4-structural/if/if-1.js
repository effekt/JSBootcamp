/**********************************************************************
* FILENAME: if-1.js                                 FILEVER: 1.0
*
* DESCRIPTION:
*   Simple decision making with the use of if / else if / else
*
* AUTHOR: Jesse Wheeler                             DATE: 22 Sept 18
*
**/

const rl = require('readline-sync');
const MAX_DISCOUNT = .15;
const MID_DISCOUNT = .12;
const MIN_DISCOUNT = .10;

let amount = rl.question("Please enter how much was spent: $");

if (amount >= 500) {
    console.log("Your discount is: " + (MAX_DISCOUNT * 100) + "%");
    console.log("Your total: $" + (amount * (1 - MAX_DISCOUNT)));
} else if (amount >= 250) {
    console.log("Your discount is: " + (MID_DISCOUNT * 100) + "%");
    console.log("Your total: $" + (amount * (1 - MID_DISCOUNT)));
} else {
    console.log("Your discount is: " + (MIN_DISCOUNT * 100) + "%");
    console.log("Your total: $" + (amount * (1 - MIN_DISCOUNT)));
}