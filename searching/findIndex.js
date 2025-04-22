// Method 1: Using Linear Search
arr = [1, 2, 3, 4, 5, 5, 5, 6, 6, 7, 8, 8, 9];

// Target element
target = 5;

// Iterate till length of array
for (let i = 0; i < arr.length; ++i) {

    // If target found return and exit program
    if (arr[i] === target) {
        console.log(
            "First index of " + target + " is: " + i
        );
        return;
    }
}

// If not found display output
console.log(target + " is not present in the given array");