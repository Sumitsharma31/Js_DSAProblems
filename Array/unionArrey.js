// Using Spread Operator with Set – Most Popular
const a1 = [1, 2, 3];
const a2 = [3, 4, 5];

// Union of arrays
const union = [...new Set([...a1, ...a2])];
console.log(union); 