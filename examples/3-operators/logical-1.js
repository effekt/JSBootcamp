/**********************************************************************
* FILENAME: logical-1.js                         FILEVER: 1.0
*
* DESCRIPTION:
*   Logical operators in JavaScript
*
* NOTES:
*   Add:
*       console.log(...);
*   Around any of the lines to see the output at that stage.
*   Ex:
*       console.log("hello" && "world");
*
* AUTHOR: Jesse Wheeler                             DATE: 22 Sept 18
*
**/

"hello" && "world"; //"world"
true && true; //true
true && false; //false
true && undefined; //undefined
true && 0; //0
false && false; //true
true || false; //true
false || false; //false
"text" || false; //"text"
"text" || 0; //"text"
false || 0 || NaN; //NaN
!true; //false
!false; //true
!null; //true
!NaN; //true
false && !false; //false
true && !false; //true

console.log("hello" && "world" && "JavaScript"); //JavaScript
console.log(3 || 4 || 5 || 6); //3
