// JavaScript Program to Check for Palindrome Number
//Approach 1
function palindromeCheck(num) {
    let numStr = num.toString();
    let result = numStr.split('').reverse().join('');
    return numStr === result;
}

console.log(palindromeCheck(121)); 
console.log(palindromeCheck(123)); 