/**********************************************************************
* FILENAME: var.js                                  FILEVER: 1.0
*
* DESCRIPTION:
*   Demonstrates the scope of a variable declared with var.
*
* AUTHOR: Jesse Wheeler                             DATE: 28 Sept 18
*
**/

var x = 123;
//Scenario 1:
if (x) {
    var x = "hello"; //declare inner x with value of "hello"
    console.log(x); //prints "hello"
}
console.log(x); //prints "hello"


//Scenario 2:
if (true) {
    var y = "Declared inside";
}
//prints the variable declared inside the if statement
console.log("Displayed outside: " + y);
y = "New Value"; //gives y a new value
//prints the new value of y
console.log("New value of y: " + y);