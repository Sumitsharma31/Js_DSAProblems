// Using Spread Operator with Set – Most Popular
const a1 = [1, 2, 3];
const a2 = [3, 4, 5];

// Union of arrays
let union = [...new Set([...a1, ...a2])];
console.log(union); 


// 2.Using push() Method


a1.push(...a2);
 union = [...new Set(a1)];
console.log(union); 



// Using concat() and filter()
let newUnion = a1.concat(a2).filter((value, index, arr) => arr.indexOf(value) === index);
console.log(newUnion); 