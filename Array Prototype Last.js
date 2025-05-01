/*  Write code that enhances all arrays such that you can call the array.last() method on any array and it will return the last element. 
If there are no elements in the array, it should return -1.
You may assume the array is the output of JSON.parse.  */

/**
 * @return {null|boolean|number|string|Array|Object}
 */
Array.prototype.last = function() {
    if(this.length === 0){  //this keyword refers to an object.
        return -1;
    }
        return this[this.length - 1]; //this.pop();
};

// prototype allows you to add new properties and methods to arrays. prototype is a property available with all JavaScript objects.
//Array.prototype.name = value
/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */
/* a simple if/else statement to check if the length of the input array is zero. If it is, we return -1.
If it is not zero, we return the last element of the array using the [this.length - 1] index. 
This approach is straightforward and easy to understand, but may be slightly less concise than other implementations */