/*
Write a function that takes two numbers and returns the greatest common divisor.
*/

function GCD(a, b) {
    if (b === 0) {
        return a;
    }
    else return GCD(b, a % b);
}

console.log(GCD(173,259))