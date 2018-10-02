/*
Write a function that outputs the nth Fibonnaci number. A number in this sequence is found by adding up the two numbers before it.
Fibonnaci's sequence:
input    0 1 2 3 4 5 6  7  8  9 ...
output   0 1 1 2 3 5 8 13 21 34 ...
What is the time complexity? Can you think of optimizing your solution? (Hint: look up dynamic programming)
*/
// O(n^2)
// function fibonnaci(n) {
//     if (n === 0 || n === 1) return n;
//     return fibonnaci(n-1) + fibonnaci(n-2);
// }
function fibonnaci(n) { // O(n)
    var memo = [0, 1];

    function recurse(m) {
        if (memo[m] === undefined) memo[m] = recurse(m-1) + recurse(m-2);
        return memo[m];
    }
    recurse(n);
    return memo.pop();
}
console.log(fibonnaci(8));// {0}
/*
======================================
function fibonnaci(n) { // {0} | 3
    var memo = [0, 1];

    function recurse(m) { | 3 
        if (memo[m] === undefined) {true} memo[m] = recurse(m-1) {1} + recurse(m-2) {2}; 
        *************************
        return memo[m];
    }
    recurse(n);
    return memo.pop();
}
=======================================
    function recurse(m) { {1} | 2
        if (memo[m] === undefined) {true} memo[m] = recurse(m-1) {3} + recurse(m-2) {4};
        **********************
        return memo[m];
    }
    recurse(n);
-----------------------------------
    function recurse(m) { {3} | 1
        if (memo[m] === undefined) {false} memo[m] = recurse(m-1) {3} + recurse(m-2) {4};
        return memo[m]; <- 1
    }
    recurse(n);
    
-----------------------------------
    function recurse(m) { {4} | 0
        if (memo[m] === undefined) {false} memo[m] = recurse(m-1) + recurse(m-2);
        return memo[m]; <- 0
    }
    recurse(n);
======================================================================================
    function recurse(m) { {2} | 1
        if (memo[m] === undefined) {false} memo[m] = recurse(m-1)+ recurse(m-2);
        return memo[m]; <-1
    }
    recurse(n);
*/
