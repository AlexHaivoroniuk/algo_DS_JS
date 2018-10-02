
/*
Implement a function that flattens a nested array.
flatten([1,[2],[3, [[4]]]]);
=> [1,2,3,4]
*/
// O(n)
function flatten(arr) {
    var flatArr = [];
    function recurse(value) {
        if (!Array.isArray(value)) flatArr.push(value);
        else value.forEach(item => recurse(item));
    }
    recurse(arr);
    return flatArr; 
}

console.log(flatten([1,[2],[3, [[4]]]])) // {0}