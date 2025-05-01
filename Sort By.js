/* Given an array arr and a function fn, return a sorted array sortedArr. 
You can assume fn only returns numbers and those numbers determine the sort order of sortedArr. 
sortedArr must be sorted in ascending order by fn output. You may assume that fn will never duplicate numbers for a given array. */

/*
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
var sortBy = function(arr, fn) {
    arr.sort((a,b) => fn(a) - fn(b));
    return arr;
};
/* This compare function:
Subtracts a - b
If result is:
< 0: a comes first
> 0: b comes first
0: order stays the same */

/* By default, arr.sort() in JavaScript converts every element to a string, and then compares the strings in Unicode order, not numerical order.
const arr = [5, 10, 1, 100];
console.log(arr.sort()); // [1, 10, 100, 5] ❌ */

