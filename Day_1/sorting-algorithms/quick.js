/*
QUICK SORT(partition)
*** Description
Like merge sort, quick sort employs a divide and conquer strategy.
It has a partitioning step, in which you pick an element (called a pivot) and partition the array so that all smaller elements come before pivot and all larger elements come after. The pivot will be in its final position. Recursively apply this to the subarray of smaller elements and the subarray of larger elements.
*** Exercises
- Write a partition helper function. For choice of pivot, for a basic implementation, we recommend choosing either the first or last element in the subarray. If you need hints, look up the Lumoto partiton scheme. Test this out before moving forward!
- Implement quicksort
- Identify time complexity
- Consider implications for choice of pivot (https://en.wikipedia.org/wiki/Quicksort#Choice_of_pivot)
*** Extra Credit
Variants:
- Implement a multi-pivot quicksort (ex: partition into 3 subarrays using 2 pivots)
*/

/* 
Move the pivot to its sorted place in the array
steps:
1. Choose pivor point, last element
2. Start pivot location at the beginning of the array
3. Iterate through array and if element <= pivot, swap element before pivot location;

PSEUDO-CODE
|3|7|8|5|2|1|9|5|(4)|

partition(arr, lo, hi)
choose last element as pivot // arr[arr.ln] (4)

keep track of index for pivotLoc
initialized as lo // 0

for i, loop from low to high 0 to arr.ln
if current arr[i] <= pivot // 7 <=4 //false
swap pivotLoc and i // nothing happens
increment pivotLoc // 1
else
save 4 in variable
swap[arr.ln-i] with arr[i]
move 5 to i; move 4 to arr.ln-1-i

[3,7,6,1,2,5,4]

partition(arr, first, last)
    pivotLoc = first
    pivotVal = arr[last]
    pivot = last
    loop from first to last
        compare arr[pivot] to arr[pivotLoc]
        if(arr[pivot]>arr[pivotLoc])
            increment pivotLoc
        else
            swap arr[pivotLoc] with arr[pivot]
            swap arr[pivot] with arr[arr.ln-2]

// TODO: add in your break  for when pivot in its final place

*/
function swap(arr, i, j) {
    if (i === j) return;
    var tmp  = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}

function partition(arr, lo, hi) {
    var pivot = arr[hi],
        pivotLoc = lo;
    for(var i = lo; i < hi; ++i) {
        var val = arr[i]
        if (val <= pivot) {
            swap(arr, pivotLoc, i);
            pivotLoc++;
        }
    }
    swap(arr, pivotLoc, hi);
    return pivotLoc;
}
function quickSort(arr, low, high) {
    if(low === undefined) low = 0;
    if(high === undefined) high = arr.length-1;

    if (low < high) {
        var p = partition(arr, low, high);

        quickSort(arr, low, p-1);
        quickSort(arr, p+1, high);
    }
    if (high-low === arr.length-1) return arr; 
}

// var inArr = [65, 100, 36, 82, 46, 37, 61, 58, 34, 53, 18, 83, 66, 96, 26, 77, 97, 13, 11, 88]; 
// var inArr = [2, 9, 10, 6, 4, 7, 1, 5, 8, 3]; 
var inArr = [5,3,1,4,2]; 

console.log(quickSort(inArr));