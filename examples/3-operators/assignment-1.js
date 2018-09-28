/**********************************************************************
* FILENAME: assignment-1.js                         FILEVER: 1.0
*
* DESCRIPTION:
*   Demonstration of the assignment and shorthand arithmetic
*   assignment operators.
*
* NOTES:
*   Add:
*       console.log(x);
*   After any of the rows to see the output of "x" at that stage
*
* AUTHOR: Jesse Wheeler                             DATE: 22 Sept 18
*
**/

let x = 5;
x += 3;     //addition: x = 8 (5 + 3) => (x = x + 3)
x -= 5;     //subtraction: x = 3 (8 - 5) => (x = x – 5)
x *= 4;     //multiplication: x = 12 (3 * 4) => (x = x * 4)
x /= 6;     //division: x = 2 (12 / 6) => (x = x / 6)
x **= 3;    //exponential: x = 8 (2 ** 3) => (x = x ** 3)
x %= 2;     //modulus: x = 0 (2 % 2) => (x = x % 2)
x = "Hello "; //set x to “Hello “
x += "World"; //concatenation: x = “Hello World” (“Hello “ + “World”)
