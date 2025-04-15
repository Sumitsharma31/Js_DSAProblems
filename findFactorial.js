// javascript program to find Factorial number of a num

let  num=6;
let res=1;
const facFunc=(res)=>{
    for (let index = 1; index <= num; index++) {
       res*=index
        
    }
    return res;
}
console.log(facFunc(res));
// function fact(n) {
//     let res = 1;
//     for (let i = 1; i <= n; i++) {
//         res *= i;
//     }
//     return res;
// }
// let result=fact(5)
// console.log(result);