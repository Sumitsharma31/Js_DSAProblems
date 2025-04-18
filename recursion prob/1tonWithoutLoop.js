// Print 1 to n without using any loop


function recursion(num){
    if(num>0 ){
        recursion(num-1)
        console.log(num);
    }
    
    
    
}
recursion(5);

