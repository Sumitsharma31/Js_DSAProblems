// javascript program to print n to 1 without loops

function recursionFunc(num){
    if(num>0){
        console.log(num);
        recursionFunc(num-1)
        
    }
}
recursionFunc(5)