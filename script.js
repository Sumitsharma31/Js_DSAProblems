// JavaScript Program to Check for Palindrome Number
//Approach 1 Using String Reversal

/*function palindromeCheck(num) {
    let numStr = num.toString();
    let result = numStr.split('').reverse().join('');
    return numStr === result;
}

console.log(palindromeCheck(121)); 
console.log(palindromeCheck(123)); */

// Approach 2: Using Array Every() Method

function palindromeCheck(number) {
    let numStr = number.toString();
    let numArr = numStr.split('');
    console.log(numArr);
    
    return numArr.every((num, index) =>
        {console.log(num,index);
            num === numArr[numArr.length - 1 - index]});
}

// Checking the number is Palindrome
console.log(palindromeCheck(121));
// console.log(palindromeCheck(12321));
// console.log(palindromeCheck(12345)); 