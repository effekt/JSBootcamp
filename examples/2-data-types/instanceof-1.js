/**********************************************************************
* FILENAME: instanceof-1.js                         FILEVER: 1.0
*
* DESCRIPTION:
*   Sample outputs of "typeof" in JavaScript on the various primitive
*   data types.
*
* AUTHOR: Jesse Wheeler                             DATE: 22 Sept 18
*
**/

let x = "Hello";
console.log(typeof x);  //"string"
x = new String("World")
console.log(typeof x);  //"object"
console.log(x.constructor.name);    //"String"
console.log(x instanceof String);   //"true"

x = 5;
console.log(typeof x);  //"number"
x = new Number(5);
console.log(typeof x);  //"object"
console.log(x.constructor.name);    //"Number"
console.log(x instanceof Number);   //"true";
