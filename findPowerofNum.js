// JavaScript Program to Compute Power of a Number
// 1 Using JavaScript Loops

// let n = 5

// // Power input
// let power = 3

// // Result variable
// let num = 1;
// for (let i = 0; i < power; ++i) {
//     num = num * n;
// }

// // Display output
// console.log(num);


//2 Recursive function to compute Power
function pow(n, p) {
    if (p == 1) return n;
    return n * pow(n, p - 1);
}

// Base number input
let n = 8;

// Power input
let power = 3

// Display output
console.log(pow(n, power));