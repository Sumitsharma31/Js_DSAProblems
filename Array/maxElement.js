// Max Element in an Array
// 1. Using the Spread Operator

// const a = [22, 65, 1, 39];
// console.log(Math.max(...a));
// console.log([...a]);

// 2.Using sort() Method

// const arr = [22, 65, 1, 39];
// arr.sort((a, b) => b - a);
// console.log(arr[0]);


// 3.Using the forEach Method

// let a = [1, 2, 3, 4, 5];
// let max = a[0];
// a.forEach(num => {
//     if (num > max) {
//         max = num;
//     }
// });
// console.log(max); 


// 4.Using reduce() Method
const array = [22, 65, 1, 39];
const ans = array.reduce(function (a, b) {
    console.log(a,b);
    
    return (a > b) ? a : b
});
console.log(ans);
