// JavaScript Program for Sum of Digits of a Number using Recursion
function sumOfDigits(n) {
    if (n < 10) {
        return n;
    }
    let quo = Math.floor(n / 10);
    return n % 10 + sumOfDigits(quo);
}

console.log(sumOfDigits(123));
console.log(sumOfDigits(249));
console.log(sumOfDigits(123456789));
