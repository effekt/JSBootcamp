/**********************************************************************
* FILENAME: do-vs-dowhile.js                        FILEVER: 1.0
*
* DESCRIPTION:
*   Demonstration of while vs do-while.
*
* AUTHOR: Jesse Wheeler                             DATE: 26 Sept 18
*
**/

while(false) {
    console.log("Inside of while.");
}
//No output since condition is checked first.

do {
    console.log("Inside of do-while.");
} while(false);
//Output since condition is checked last.
