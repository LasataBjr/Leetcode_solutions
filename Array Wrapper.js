/* Create a class ArrayWrapper that accepts an array of integers in its constructor. This class should have two features:
When two instances of this class are added together with the + operator, the resulting value is the sum of all the elements in both arrays.
When the String() function is called on the instance, it will return a comma separated string surrounded by brackets. For example, [1,2,3]. */
 /*
 * @param {number[]} nums
 * @return {void}
 */
var ArrayWrapper = function(nums) {
    this.nums = nums;
};

/**
 * @return {number}
 */
ArrayWrapper.prototype.valueOf = function() {
    //This makes + operator return the sum
    return this.nums.reduce((sum, num) => sum + num, 0);
}

/**
 * @return {string}
 */
ArrayWrapper.prototype.toString = function() {
    // This makes string conversion return the array as a string
    return `[${this.nums.join(',')}]`;
}
/* join(",") turns the array into a plain string of values separated by commas.
\${...}`` wraps it in brackets to resemble how arrays normally look.
The $ is part of the syntax ${...} used to insert values into strings dynamically. */

/**
 * const obj1 = new ArrayWrapper([1,2]);
 * const obj2 = new ArrayWrapper([3,4]);
 * obj1 + obj2; // 10
 * String(obj1); // "[1,2]"
 * String(obj2); // "[3,4]"
 */