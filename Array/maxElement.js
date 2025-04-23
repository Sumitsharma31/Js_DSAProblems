// Max Element in an Array
// 1. Using the Spread Operator

// const a = [22, 65, 1, 39];
// console.log(Math.max(...a));
// console.log([...a]);

// 3.Using sort() Method
const arr = [22, 65, 1, 39];
arr.sort((a, b) => b - a);
console.log(arr[0]);
