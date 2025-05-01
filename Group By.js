/* Write code that enhances all arrays such that you can call the array.groupBy(fn) method on any array and it will return a grouped version
 of the array. A grouped array is an object where each key is the output of fn(arr[i]) and each value is an array containing all items in 
the original array which generate that key. The provided callback fn will accept an item in the array and return a string key . The order of 
each value list should be the order the items appear in the array. Any order of keys is acceptable. Please solve it without lodash's _.groupBy function. */

/*
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
    return this.reduce((result, item) => {
        const key = fn(item); // Grouping key, e.g., item.id or String(item)
        if(!result[key]){  
            result[key] = []; //Initialize array for that key if not present
        }
        result[key].push(item); // Push current item into the correct group
        return result; // Return the accumulator for next iteration
    }, {});
};
/* When you use .reduce(callback, initialValue):
initialValue is the value result starts with in the first iteration.
In your groupBy case, it needs to start with an empty object ({}) because you're grouping items into object keys.
If you don’t provide {}, then:
reduce will use the first item of the array as the initial result, which will break your logic
 — because you're expecting result to be an object, not the first array item.
 */


/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */