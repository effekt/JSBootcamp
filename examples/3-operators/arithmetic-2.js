/**********************************************************************
* FILENAME: arithmetic-2.js                         FILEVER: 1.0
*
* DESCRIPTION:
*   A bit more complex arithmetic.
*
* NOTES:
*   Add:
*       console.log(...);
*   Around any of the lines to see the output at that stage.
*   Ex:
*       console.log(x++);
*
* AUTHOR: Jesse Wheeler                             DATE: 22 Sept 18
*
**/

let x = 3;
let y = 5;
let z = x + y; //8
z = z + x; //11
z += z + y / 5; //11 + (11 + 5 / 5) => 11 + (11 + 1) => 23
z = (z + 1) / x; //(23 + 1) / 3 => 24 / 3 => 8
z = --z + z++ - ++x * --y - -true; //7 + 7 - 4 * 4 - -1 => 15 - 16 => -1
z = "Number: " + z; //"Number: -1"
