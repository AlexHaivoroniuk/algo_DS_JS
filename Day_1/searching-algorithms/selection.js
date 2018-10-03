/*
SELECTION SORT
*** Description
Iterate over array and grow a sorted array behind current element.
For each position, find the smallest element in unsorted subarray starting at that position, and swap elements so that smallest element is at the beginning of unsorted subarray.
example:
[ 1 2 3|9 5 7 4 ]
 sorted|unsorted
smallest element in unsorted subarray is 4
swap with element at beggining of unsorted subarray
sorted portion has now grown:
[ 1 2 3 4|5 7 9 ]
*** Exercises
- Implement selection sort
- Identify time complexity
Stable Variant
- Implement as a stable sort - rather than swapping, the minimum value is inserted into the first position and all other items are shifted one to the right. How does this impact performance?
- Modify function to take comparator function. specify default if not provided (check out native Array.sort comparator function for reference)
- Use your comparator function to verify that your sort is stable by taking input: [{value: 15}, {value: 10, order: 1}, {value: 10, order: 2}]
- Implement selection sort for a linked list (you can use your data structure implemention from earlier in the course). How does this impact performance and stability?
*/

// function selectionSort(arr) { // O(n^2)
//     var 
//         currentMin = null, 
//         unsortedIdx = 0, 
//         newMinIdx = 0, 
//         tmp = null;
//         swapped = false; 
//     do { // O(n)
//         swapped = false;
//         currentMin = arr[unsortedIdx];
//         for(var i = unsortedIdx; i < arr.length-1; ++i) { // O(n)
//             if(arr[i] < currentMin) {
//                 currentMin = arr[i];
//                 newMinIdx= i;
//             }
//         }
//         if (unsortedIdx !== newMinIdx) {
//             tmp = arr[newMinIdx];
//             arr[newMinIdx] = arr[unsortedIdx];
//             arr[unsortedIdx] = tmp;
//             swapped = true;
//         }
//         ++unsortedIdx;
//         newMinIdx = unsortedIdx;
//     } while(swapped)
//     console.log(arr)
// }

// selectionSort([3,44,38,5,47,15,36,26,27,2,46,4,19,50,48])


// - Implement as a stable sort - rather than swapping, the minimum value is inserted into the first position and all other items are shifted one to the right. How does this impact performance?


// function selectionStableSort(arr) { // O(n^3)
//     var 
//         currentMin = null, 
//         unsortedIdx = 0, 
//         newMinIdx = 0,
//         swapped = true; 
//     do { // O(n)
//         currentMin = arr[unsortedIdx];
//         for(var i = unsortedIdx; i < arr.length; ++i) { // O(n)
//             if(arr[i] < currentMin) {
//                 currentMin = arr[i];
//                 newMinIdx= i;
//             }
//         }
//         while (newMinIdx > unsortedIdx) {
//             arr[newMinIdx] = arr[newMinIdx-1];
//             --newMinIdx;
//         }
//         arr[unsortedIdx] = currentMin;
//         ++unsortedIdx;
//         newMinIdx = unsortedIdx;
//         if (unsortedIdx === arr.length-1) swapped = false;
//     } while(swapped)
//     console.log(arr)
// }

// selectionStableSort([3,44,38,5,47,15,36,26,27,2,46,4,19,50,48])

// - Modify function to take comparator function. specify default if not provided (check out native Array.sort comparator function for reference)
// - Use your comparator function to verify that your sort is stable by taking input: [{value: 15}, {value: 10, order: 1}, {value: 10, order: 2}]

function selectionStableSort(arr, compare) { // O(n^3)
    var 
        currentMin = null, 
        unsortedIdx = 0, 
        newMinIdx = 0,
        swapped = true; 
    compare = compare || function(a, b) {
        if (a < b ) return -1;
        if (a > b) return 1;
        return 0;
    }
    do { // O(n)
        currentMin = arr[unsortedIdx];
        for(var i = unsortedIdx; i < arr.length; ++i) { // O(n)
            if(compare(arr[i], currentMin) === -1) {
                currentMin = arr[i];
                newMinIdx= i;
            }
        }
        while (newMinIdx > unsortedIdx) { // O(n)
            arr[newMinIdx] = arr[newMinIdx-1];
            --newMinIdx;
        }
        arr[unsortedIdx] = currentMin;
        ++unsortedIdx;
        newMinIdx = unsortedIdx;
        if (unsortedIdx === arr.length-1) swapped = false;
    } while(swapped)
    console.log(arr)
}

// selectionStableSort([3,44,38,5,47,15,36,26,27,2,46,4,19,50,48])
selectionStableSort([{value: 15}, {value: 10, order: 1}, {value: 10, order: 2}], function(a, b) {
    if (a.value < b.value ) return -1;
    if (a.value > b.value) return 1;
    return 0;
})