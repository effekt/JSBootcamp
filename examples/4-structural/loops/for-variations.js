/**********************************************************************
* FILENAME: for-1.js                                FILEVER: 1.0
*
* DESCRIPTION:
*   Demonstrating the various ways to write a for loop.
*
* AUTHOR: Jesse Wheeler                             DATE: 25 Sept 18
*
**/

let i = 0;

//No initialization.
i = 0;
console.log("\nNo Initialization: ");
for ( ; i <= 10; i++) {
    console.log(i);
}


//No initialization or final expression.
i = 0;
console.log("\nNo Initialization or final expression: ");
for ( ; i <= 10; ) {
    console.log(i);
    i++;
}


//No initialization or condition.
i = 0;
console.log("\nNo Initialization or condition: ");
for ( ; ; i++) {
    console.log(i);

    if (i === 10)
        break;
}


//No initialization, condition, or final expression.
i = 0;
console.log("\nNo Initialization, condition, or final expression: ");
for ( ; ; ) {
    console.log(i);
    i++;

    if (i === 11)
        break;
}


//Multi initialization, condition, and final expression.
console.log("\nMulti initialization, condition, and final expression: ");
for (let x = 0, y = 10; x <= 10 && y >= 0; x++, y--) {
    console.log("x: " + x + ", y: " + y);
}