/**********************************************************************
* FILENAME: break-1.js                              FILEVER: 1.0
*
* DESCRIPTION:
*   Simple use of break inside different types of loops.
*
* AUTHOR: Jesse Wheeler                             DATE: 27 Sept 18
*
**/

let x = 0;

//Inside of a for loop
for (x; ; x++) {
    console.log('For Loop x: ' + x);
    if (x === 5)
        break;
}
console.log('Outside of For Loop\n');


//Inside of while loop
x = 0;
while (true) {
    x++;
    console.log('While Loop x: ' + x);
    if (x === 5)
        break;
}
console.log('Outside of While Loop\n');


//Inside of do while loop
x = 0;
do {
    x++;
    console.log('Do While Loop x: ' + x);
    if (x === 5)
        break;
} while(true);
console.log('Outside of Do While Loop\n');
