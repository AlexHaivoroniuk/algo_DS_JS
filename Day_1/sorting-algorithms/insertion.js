/*
INSERTION SORT
*** Description
Iterate over array and grow a sorted array behind current element.
For each position, compare value of element with previous elements and swap positions if previous element is larger.
example:
[ 3 4 5|1 2 6 ]
 sorted|unsorted
swaps:
[ 3 4 1 5|2 6 ]
[ 3 1 4 5|2 6 ]
[ 1 3 4 5|2 6 ]
now repeat for next unsorted element
*** Exercises
- Implement insertion sort for array of numbers
- Identify time complexity
- Modify function to take comparator function. specify default if not provided (check out native Array.sort comparator function for reference)
- Use your comparator function to verify that your sort is stable by taking input: [{value: 15}, {value: 10, order: 1}, {value: 10, order: 2}]
*** Extra credit
- Implement shell sort, a generalization of insertion sort
(https://en.wikipedia.org/wiki/Shellsort)
*/

// - Implement insertion sort for array of numbers
// function insertionSort(arr) {
//     var 
//         extractEl = null, 
//         unsortedIdx = 0, 
//         lastSortedIdx = 0;

//         for(var i = unsortedIdx; i < arr.length; ++i) {
//             extractEl = arr[i];
//             ++unsortedIdx;
//             for(var j = lastSortedIdx; j >= 0; --j ) {
//                 if (extractEl > arr[j]) break;
//                 if (extractEl < arr[j]) {
//                     arr[j+1] = arr[j]; // move to the right by 1
//                 }
//                 if (extractEl === arr[j]) continue
//                 arr[j] = extractEl;
//             }
//             ++lastSortedIdx;
//         }
//     console.log(arr)
// }
// function insertionSort(arr) {
// var 
//     extractEl = null,  
//     lastSortedIdx = 0;

//     for(var i = 1; i < arr.length; ++i) {
//         extractEl = arr[i];
//         lastSortedIdx = i-1;
//         while(lastSortedIdx >= 0 && arr[lastSortedIdx] > extractEl) {
//             arr[lastSortedIdx+1] = arr[lastSortedIdx];
//             --lastSortedIdx;
//         }
//         arr[lastSortedIdx+1] = extractEl;
//     }
// console.log(arr)
// }


// insertionSort([3,44,38,5,47,15,36,26,27,2,46,4,19,50,48])

// - Modify function to take comparator function. specify default if not provided (check out native Array.sort comparator function for reference)
// - Use your comparator function to verify that your sort is stable by taking input: [{value: 15}, {value: 10, order: 1}, {value: 10, order: 2}]

// function insertionSort(arr, compare) {
//     var 
//         extractEl = null, 
//         unsortedIdx = 0, 
//         lastSortedIdx = 0;
//         compare = compare || function(a, b) {
//             if (a < b ) return -1;
//             if (a > b) return 1;
//             return 0;
//         }
//         for(var i = unsortedIdx; i < arr.length; ++i) {
//             extractEl = arr[i];
//             ++unsortedIdx;
//             for(var j = lastSortedIdx; j >= 0; --j ) {
//                 if (compare(extractEl, arr[j]) === 1) break;
//                 if (compare(extractEl, arr[j]) === -1) {
//                     arr[j+1] = arr[j]; // move to the right by 1
//                 }
//                 if (extractEl === arr[j]) continue
//                 arr[j] = extractEl;
//             }
//             ++lastSortedIdx;
//         }
//     console.log(arr)
// }

// insertionSort([3,44,38,5,47,15,36,26,27,2,46,4,19,50,48])
// insertionSort([{value: 15}, {value: 10, order: 1}, {value: 10, order: 2}], function(a, b) {
//     if (a.value < b.value ) return -1;
//     if (a.value > b.value) return 1;
//     return 0;
// })



// *** Extra credit
// - Implement shell sort, a generalization of insertion sort
// (https://en.wikipedia.org/wiki/Shellsort) !!!

function shellSort(arr) {
    for (var gap = parseInt(arr.length/2); gap > 0; gap = parseInt(gap/2)) { 
        for (var i = gap; i < arr.length; i += 1) { 
            var temp = arr[i]; 
            var j;             
            for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) 
                arr[j] = arr[j - gap]; 
              
            //  put temp (the original a[i]) in its correct location 
            arr[j] = temp; 
        } 
    } 
    console.log(arr)
}

shellSort([3,44,38,5,47,15,36,26,27,2,46,4,19,50,48])