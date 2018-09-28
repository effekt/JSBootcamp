/**********************************************************************
* FILENAME: let.js                                  FILEVER: 1.0
*
* DESCRIPTION:
*   Demonstrates the confines in which a variable declared with
*   let exists.
*
* AUTHOR: Jesse Wheeler                             DATE: 27 Sept 18
*
**/


let x = "hello";
//Scenario 1:
if (x) {
    let x = "world"; //define local x with "world"
    console.log("Redeclared x: " + x);
}
console.log("Outside of redeclared x: " + x); //remains "hello"


//Scenario 2:
if (x) {
    //since we didn't overwrite outer x, "hello" is printed
    console.log("Without redefining x: " + x);
}


//Scenario 3:
if (true) {
    let y = "They say I don't exist";
}

try {
    console.log('\n');
    console.log(y); //does not exist outside block it was defined
} catch(ex) {
    console.log(ex);
}
