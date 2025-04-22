// Method 1: Using Linear Search

// arr = [1, 2, 3, 4, 5, 5, 5, 6, 6, 7, 8, 8, 9];

// // Target element
// target = 5;

// // Iterate till length of array
// for (let i = 0; i < arr.length; ++i) {

//     // If target found return and exit program
//     if (arr[i] === target) {
//         console.log(
//             "First index of " + target + " is: " + i
//         );
//         return;
//     }
// }

// // If not found display output
// console.log(target + " is not present in the given array");












// Method 2: Using Binary Search
const arr = [1, 2, 3, 4, 5, 5, 5, 6, 6, 7, 8, 8, 9];

// Target element
const target = 5;
let left = 0;
let right = arr.length - 1;
let outputIndex = -1;

// Using binary search
while (left <= right) {
    
    let mid = Math.floor((left + right) / 2);

    // If found search left half for 
    // First occerrence
    if (target === arr[mid]) {

        // Store first occurrence index
        outputIndex = mid;
        right = mid - 1;
    }

    // If target is smallar discard right half
    else if (target < arr[mid]) {
        right = mid - 1;
    }

    // If target is greater discard left half
    else
        left = mid + 1;
}

// If not found display output
if (outputIndex === -1)
    console.log(target + " is not present in the given");
else {
    console.log(
        "First index of " + target + " is: " + outputIndex
    );
}