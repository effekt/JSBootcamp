const rl = require('readline-sync');

let userInput = 0;
do {
    console.log("Welcome to the System:");
    console.log("1. View inventory");
    console.log("2. Make a sale");
    userInput = +rl.question("Enter an option: ");

    switch(userInput) {
        case 0:
            break;
        case 1:
            console.log("This is your inventory");
            break;
        case 2:
            console.log("You made a sale!");
            break;
        default:
            console.log("You entered an invalid option");
    }
} while(userInput !== 0);