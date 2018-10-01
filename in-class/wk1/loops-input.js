const rl = require('readline-sync');

let y = 0;
do {
    y = +rl.question("Enter a number (1-3): ");
    if (y > 3 || y < 1 || isNaN(y)) {
        console.log("You can't follow directions.");
        continue;
    } else if (y === 1) {
        console.log("You chose option #1");
        continue;
    } else if (y === 2) {
        console.log("You chose option #2, now exiting");
        break;
    }
    console.log("You chose option #3");
} while(y !== 3);