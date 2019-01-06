arr = [4, 7, 8, 9, 1, 5] 
n = arr.length;
console.log(arr)

quickSort(arr,0,n-1) 
console.log("Sorted array is:",arr) 

function quickSort(arr,low,high) {
    
    if(low<high) {
    
        pi = partition(arr,low,high)
        console.log(pi);
        quickSort(arr,low,pi-1)
        debugger;
        quickSort(arr,pi+1,high)
        debugger;
    }
}

function partition(arr,low,high) {

    i = low-1;
    pivot = arr[high];

    for (j=low;j<=high;j++) {

        if(arr[j]<pivot) {
            i++;
            [arr[j],arr[i]] = [arr[i],arr[j]];
        }
    }
    [arr[i+1],arr[high]] = [arr[high],arr[i+1]]
    console.log(arr)
    return i+1
}


