/* Given a multi-dimensional array arr and a depth n, return a flattened version of that array.
A multi-dimensional array is a recursive data structure that contains integers or other multi-dimensional arrays.
A flattened array is a version of that array with some or all of the sub-arrays removed and replaced with the actual elements in that sub-array. 
This flattening operation should only be done if the current depth of nesting is less than n. The depth of the elements in the first
 array are considered to be 0. Please solve it without the built-in Array.flat method. */

 /**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
    let result = [];
    /* For each element:
    If it’s an array and you still have depth left (n > 0), recursively flatten it one level deeper.
    Otherwise, just push it to the result. */
    for(const item of arr){
        if(Array.isArray(item) && n > 0){
            result.push(...flat(item, n-1));
        }else{
            result.push(item);
        }
    }
    return result;       
};

/* Looping over arr:
item = 1 → not array → result = [1]
item = 2 → not array → result = [1, 2]
item = 3 → not array → result = [1, 2, 3]
item = [4, 5, 6] → array + n > 0 →
➤ recurse: flat([4, 5, 6], 0)
➤ n = 0 now, so no more recursion: returns [4, 5, 6]
➤ spread: result = [1, 2, 3, 4, 5, 6]

item = [7, 8, [9, 10, 11], 12] → recurse with n = 0
➤ returns [7, 8, [9, 10, 11], 12]
➤ spread: result = [1, 2, 3, 4, 5, 6, 7, 8, [9, 10, 11], 12]

item = [13, 14, 15] → recurse with n = 0
➤ returns [13, 14, 15]
➤ spread: result = [1, 2, 3, 4, 5, 6, 7, 8, [9, 10, 11], 12, 13, 14, 15] */