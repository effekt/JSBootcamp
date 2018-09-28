/**********************************************************************
* FILENAME: arithmetic-1.js                         FILEVER: 1.0
*
* DESCRIPTION:
*   Demonstration of the arithmetic operators available.
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
3 + 4; //7
x + 5; //8
x++; //3, however the value of x is now 4 (post-increment)
++x; //5, and the value of x is now 5 (pre-increment)
x--; //5, and the value of x is now 4 (post-decrement)
--x; //3, and the value of x is now 3 (pre-decrement)
-x; //-3, the value of x remains the same (unary negation)
+true; //1, true is typecast to a number (unary addition)
+"5"; //5, the string "5" is typecast to a number (unary addition)
"JavaScript " + "Rules"; //"JavaScript Rules" (concatenation)
4 / 0; //Infinity
