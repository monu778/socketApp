

function binary_search(arr,ele,low,high) {

    mid = parseInt((low+high)/2);
    if(arr.length>1) {
        if (arr[mid] == ele) {
            console.log("searching element found",ele,"postion=",mid);
        } else if( arr[mid]>ele) {
            high = mid-1;
            binary_search(arr,ele,low,high)

        } else if(arr[mid]<ele) {
            low = mid+1;
            binary_search(arr,ele,low,high)
        }
    } else {
        console.log("Array length is not sufficient")
    }
}
/*
var arr = [2, 3, 4, 10, 40,50,78,87,90];
var ele = 2;
low = 0;
high = arr.length-1;

binary_search(arr,ele,low,high);

*/


/*Write a program in any language you like that prints the numbers
    from 1 to 100. But for multiples of three print "Fizz" instead of
    the number and for the multiples of five print "Buzz" instead of the
    number. For numbers which are multiples of both three and five print
    "FizzBuzz" instead of the numbers. */

for(i=1;i<101;i++) {

    if(i%3==0 && i%5==0) {
         console.log("FizzBuzz")
    } else if(i%3==0) {
        console.log("Fizz");

    } else if(i%5==0) {
        console.log("Buzz")
    } else {
        console.log(i);
    }
}


