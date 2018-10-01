
//1. Write a function that loops through the numbers n down to 0. If you haven't done so try using a while loop to do this.
function loopThroughnNum(num) {
    while (num >= 0 ) {
        console.log(num);
        num--;
    }
}
//2. Next, try looping just like above except using recursion
function loopThroughnNumRecurse(num) {
    if (num <= 0) {
        console.log(num); 
        return 0;
    } else {
        console.log(num);
        loopThroughnNumRecurse(num - 1);
    }
}

//3.Write a function 'exponent' that takes two arguments base, and expo, uses a while loop to return the exponenet value of the base.
function exponent(base, expo) {
    var result = 1;
    for(var i = 0; i < expo; ++i) {
        result *= base;
    }
    console.log(result);
    return result;
}

// exponent(2, 3)
    
//4. Write a function 'RecursiveExponent' that takes two arguments base, and expo, recursively returns exponent value of the base.
function RecursiveExponent(base, expo) {
    if (expo <= 0 ) {
        return 1;
    }
    return base * RecursiveExponent(base, expo - 1);
}

//5. Write a function 'recursiveMultiplier' that takes two arguments, 'arr and num', and multiplies each arr value into by num and returns an array of the values.
function multiplier(arr, num) {
    for (var i = 0; i < arr.length; ++i) {
        arr[i] *= num;
    }
    console.log(arr);
}
multiplier([2, 4, 6, 8, 10], 2)
function recursiveMultiplier(arr, num) {
    
    recursiveMultiplier(arr, num);
    return arr;
}
// recursiveMultiplier([2, 4, 6, 8, 10], 2)
//6. Write a function 'recursiveReverse' that takes an array and uses recursion to return its contents in reverse
// function recursiveReverse(arr) {
    
// }
// recursiveReverse([2, 4, 6, 8, 10])