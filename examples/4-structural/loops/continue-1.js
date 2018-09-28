/**********************************************************************
* FILENAME: break-1.js                              FILEVER: 1.0
*
* DESCRIPTION:
*   Simple use of continue inside different types of loops.
*
* AUTHOR: Jesse Wheeler                             DATE: 27 Sept 18
*
**/

let x = 0;

//Inside of a for loop
for (x; x <= 5; x++) {
    if (!(x % 2)) //If x % 2 === 0
        continue;
    console.log('For Loop x: ' + x);
}
console.log('Outside of For Loop\n');


//Inside of while loop
x = 0;
while (x <= 5) {
    x++;
    if (!(x % 2))
        continue;
    console.log('While Loop x: ' + x);
}
console.log('Outside of While Loop\n');


//Inside of do while loop
x = 0;
do {
    x++;
    if (!(x % 2))
        continue;
    console.log('Do While Loop x: ' + x);
} while(x <= 5);
console.log('Outside of Do While Loop\n');
