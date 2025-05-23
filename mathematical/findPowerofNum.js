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
// function pow(n, p) {
//     if (p == 1) return n;
//     return n * pow(n, p - 1);
// }

// // Base number input
// let n = 8;

// // Power input
// let power = 3

// // Display output
// console.log(pow(n, power));

// 3 by using inBuild Function 

// let n = 7;
// let power = 9;

// // Calculate and display output
// console.log(Math.pow(n,power));

// 4  use the JavaScript ** operator

// let n = 17;
// let power = 3;

// // Calculate and display output
// console.log(n**power);

// Function to compute power using Exponentiation by Squaring

function powerBySquaring(base, exponent) {
    if (exponent === 0) return 1;
    if (exponent % 2 === 0) {
        let halfPower = powerBySquaring(base, exponent / 2);
        return halfPower * halfPower;
    } else {
        return base * powerBySquaring(base, exponent - 1);
    }
}

// Base number input
let base = 2;

// Power input
let exponent = 10;

// Calculate and display output
console.log(powerBySquaring(base, exponent));