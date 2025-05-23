//  Factorial of a Number
function factorial(n) {
    // Base case: if n is 0 or 1, return 1
    if (n === 0 || n === 1) {
      return 1;
    }
  
    // Recursive case: n! = n * (n-1)!
    return n * factorial(n - 1);
  }
  
  console.log(factorial(3));