/*
Bubble SORT
*** Description
Iterate over array, comparing adjacent items and swap if in incorrect order. Largest elements bubble to the end of the array
*** Exercises
- Implement bubble sort
- Identify time complexity
Optimizations:
- Make algorithm adaptive (if at any point array is already sorted, exit function early). After doing this, what is time complexity for nearly sorted arrays?
- For each pass through the array, are you doing any unnecessary checking of elements? Minimize checking and consider the effect on time complexity.
Variants:
- Implement cocktail sort (for each pass find both min and max values and sort in both directions). How does this impact performance?
(https://en.wikipedia.org/wiki/Cocktail_sort)
*/


function bubbleSort(arr) { //O(n^2)
    var swapped = false;
    do {
        swapped = false
        for(var k = 0; k < arr.length-1; ++k) {
            if (arr[k] > arr[k+1]) {
                var tmp = arr[k+1];
                arr[k+1] = arr[k];
                arr[k] = tmp;
                swapped = true;
            };
        }
    } while (swapped)
    
    console.log(arr)
}

bubbleSort([3,44,38,5,47,15,36,26,27,2,46,4,19,50,48])

// function cockTailSort(arr) { //O(n^3)?
//     var swapped = false;
//     do {
//         swapped = false
//         for(var k = 0; k < arr.length-1; ++k) {
//             if (arr[k] > arr[k+1]) {
//                 var tmp = arr[k+1];
//                 arr[k+1] = arr[k];
//                 arr[k] = tmp;
//                 swapped = true;
//             };
//         }
//         if (!swapped) break;
//         for(var k = arr.length-1; k > 0; --k) {
//             if (arr[k] > arr[k+1]) {
//                 var tmp = arr[k+1];
//                 arr[k+1] = arr[k];
//                 arr[k] = tmp;
//                 swapped = true;
//             };
//         }
//     } while (swapped)
    
//     console.log(arr)
// }

// cockTailSort([3,44,38,5,47,15,36,26,27,2,46,4,19,50,48])

