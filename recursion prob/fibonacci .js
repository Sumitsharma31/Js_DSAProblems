// Fibonacci Sequence
function fibonacci(n) {
    // Base case: return n if n is 0 or 1
    if (n === 0 || n === 1) {
      return n;
    }
    
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
  
  console.log(fibonacci(5)); 