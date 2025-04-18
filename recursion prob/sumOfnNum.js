// javascript Program to Sum of natural numbers using recursion

function recursionSum(num){
    if(num<=1){
        return num;

    }
    return num+recursionSum(num-1);
}
console.log(recursionSum(10));
