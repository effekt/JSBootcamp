/**********************************************************************
* FILENAME: typeof-1.js                             FILEVER: 1.0
*
* DESCRIPTION:
*   Sample outputs of "typeof" in JavaScript on the various primitive
*   data types.
*
* AUTHOR: Jesse Wheeler                             DATE: 22 Sept 18
*
**/

console.log(typeof 3);          //"number"
console.log(typeof "abc");      //"string"
console.log(typeof true);       //"boolean"
console.log(typeof null);       //"object"
console.log(typeof undefined);  //"undefined"

let x = "hello";
console.log(typeof x);  //"string"
x = 3;
console.log(typeof x);  //"number"
