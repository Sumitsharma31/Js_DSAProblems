function decToBin(d) {
    if (d === 0) 
        return 0; 
    else
        return (d % 2 + 10 * decToBin(Math.floor(d / 2)));
}

// Driver code 
let d = 7;
console.log(decToBin(d));