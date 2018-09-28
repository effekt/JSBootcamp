/**********************************************************************
* FILENAME: try-1.js                                FILEVER: 1.0
*
* DESCRIPTION:
*   Example of try catch finally.
*
* AUTHOR: Jesse Wheeler                             DATE: 27 Sept 18
*
**/

const MY_CONST = "try";
try {
    MY_CONST = "catch";
} catch(err) {
    console.error("ERROR: " + err.name);
    console.error("MESSAGE: " + err.message);
    console.error("----- STACK TRACE -----");
    console.error(err.stack);
} finally {
    console.log("\nIt's ok though, we handled it.");
}