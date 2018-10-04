/*
MERGE SORT
*** Description
Merge sort employs a divide and conquer strategy - merge two sorted subarrays into one sorted array.
Recursive top-down approach:
Recursively break down array into two subarrays and sort them recursively. Subarrays are broken down until they have only 1 element (implying they are sorted).
Iterative bottom-up approach:
Split array into sublists of size 1, merge adjacent sublists into sorted lists, repeat until no more sublists.
*** Exercises
- Implement recursive merge sort (you might want to write a helper function to handle the merge step)
- Implement iterative merge sort
- Identify time complexity
- Modify function to take comparator function. specify default if not provided (check out native Array.sort comparator function for reference)
- Use your comparator function to verify that your sort is stable by taking input: [{value: 15}, {value: 10, order: 1}, {value: 10, order: 2}]
Optimization:
- Refactor your iterative solution to be a natural merge sort. This means that the initial subarrays are naturally occurring sorted sequences. How does this impact time complexity and adaptivity?
ex:
input array: [ 1 2 4 5 9 ]
subarrays for regular merge sort: [ [1], [2], [4], [5], [9] ]
subarrays for natural merge sort: [ [1,2], [4,5], [9] ]
*/

function defaultComparator(a,b) {
    if (a < b ) return -1;
    if (a > b) return 1;
    return 0;
}

function merge(left, right, compare) {
    compare = compare || defaultComparator;
    var iL = 0;
    var iR = 0;
    var mergedArr = [];
    while (mergedArr.length < (left.length + right.length)) {
        if (left.length === iL) mergedArr = mergedArr.concat(right.slice(iR));
        else if (right.length === iR) mergedArr = mergedArr.concat(left.slice(iL));
        else if (compare(left[iL], right[iR]) < 0) mergedArr.push(left[iL++]);
        else mergedArr.push(right[iR++]) 
    }
    return mergedArr;
}

function mergeSortRecursive(arr, compare) { // O( n*log(n))
    if (arr.length <=1) return arr;
    var left = arr.slice(0, arr.length/2);
    var right = arr.slice(arr.length/2);
    var lSorted = mergeSortRecursive(left)
    var rSorted = mergeSortRecursive(right)
    return merge(lSorted, rSorted, compare);
}

// console.log(mergeSortRecursive([3,44,38,5,47,15,36,26,27,2,46,4,19,50,48]))
console.log(mergeSortRecursive([{value: 15}, {value: 10, order: 1}, {value: 10, order: 2}], function(a, b) {
        if (a.value < b.value ) return -1;
        if (a.value > b.value) return 1;
        return 0;
}))




/* Pseudo code 
merge(L, R)
Rpr = 0
Lpr = 0
Output array = []
Loop until L.ln + R.ln > array.ln
   if L[Lpr] is greater than R[Rpr]
        Push R to Output array
        increment Rpr
    else 
        pushL[Lpr] into Output array
        increment Lpr

mergeSort(list) 
    base case: if list.length < 2, return
    break then list in to halves L & R
    Lsorted = mergeSort(L)
    Rsorted = mergeSort(R)
    return merge(Lsorted, Rsorted)


mergeSort(list) 
    initialize n to the length of the list
    base case if n < 2, just return
    initialise mid to n/2
    left = left slice of array to mid - 1 
    left = left slice of array mid to n - 1 
    mergeSort(left)
    mergeSort(right)
    
    merge(left, right)
------------------------------------------------
*/