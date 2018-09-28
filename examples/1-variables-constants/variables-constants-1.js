/**********************************************************************
* FILENAME: variables-constants-1.js                FILEVER: 1.0
*
* DESCRIPTION:
*   Demonstrating the loosely typed properties of JavaScript
*   variables and constants.
*
* AUTHOR: Jesse Wheeler                             DATE: 22 Sept 18
*
**/

var x = 5;
let y = "something";
const z = 6;

console.log(x, y, z); //5 ‘something’ 6

x = "else";
y = 3;
console.log(x, y); //‘else’ 3

//z = "oops"; //Uncomment line to see error with constant assignment
