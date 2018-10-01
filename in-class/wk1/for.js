let x = 0;

for ( ; ; ) {
    if (x === 10)
        break;
    console.log("hello");
    x++;
}

//5

// 5 * 4 * 3 * 2 * 1

let sum = 1;
for (let y = 1; y < 6; y++) {
    sum *= y;
}
console.log(sum);

for (let i = 0; i < 10; i++) {
    if (i === 3)
        continue;

    if (i === 8)
        break;

    console.log(i);
}