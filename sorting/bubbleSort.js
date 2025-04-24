// JavaScript Program for Bubble Sort

function bubbleSort(arr, n) {
    let swapped = false;
    for(let i = 0;i < n; i++){
        swapped = false;
        for(let j = 0 ; j < n - i -1; j++){
            if( arr[j] > arr[j+1]){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
                swapped = true;
            }
        }
        
        if( swapped === false) break;
    }
    return arr;
}

let a = [2, 1, 3, 4];
a = bubbleSort(a, 4);
console.log(a);