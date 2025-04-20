// creake An Array By constructor

// let array=new Array(5)

// console.log("length of Array", array.length);
// console.log("Value of Array :", array);


// Initialize an array using the apply function
// syntax function.apply(this, argsArray)
// syntax arr.map( ( element, index, array) => { //...code to be exected }



// Initialize an array using the apply function


// let arr = Array.apply(1, Array(5)).map((_, index) => {
//     return _ , index
// }); 



// // Display the length and generated array
// console.log("Length of the Array:", arr.length);

// console.log("Array Values: ", arr);


let len=5;
let arr=new Array();
for (let i=0;i<len; i++){
    arr.push(i);
}
console.log(arr);
