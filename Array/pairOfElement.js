// Find Pairs That Sum to a Given Number in an Array
function findPairs(arr, sum) {
    const seen = new Set();
    const pairs = [];

    for (let num of arr) {
        const target = sum - num;
        if (seen.has(target)) {
            pairs.push([target, num]);
        }
        seen.add(num);
    }

    return pairs;
}

console.log(findPairs([1, 3, 2, 4, 5, 6], 7)); 
// Output: [[3, 4], [2, 5], [1, 6]]