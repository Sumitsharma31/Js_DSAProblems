const arr=new Array(5,4,8,6);

// console.log(arr);
// These are the following ways to Access Elements in an Array:

// 1. Using Square Bracket Notation
console.log(arr[3]);


// 2. Using forEach Loop

// const a = [100, 200, 300, 400, 500];
// a.forEach((item, index,Array) => {
//     console.log(item );
// });

// 3. Using map method 

// arr.map((item,index)=>{
//     console.log(item);
    
// })

// 4. Using find method

 newReturn=arr.find((item)=>{
    return item>5;
})
console.log(newReturn);
console.log(typeof(newReturn));
