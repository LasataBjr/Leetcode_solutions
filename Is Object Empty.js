/* Given an object or an array, return if it is empty.
An empty object contains no key-value pairs. An empty array contains no elements.
You may assume the object or array is the output of JSON.parse. */
/*
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
    if(JSON.stringify(obj).length <= 2 || Object.keys(obj).length === 0) //converting json object into string and using Oject.keys() to obtain to check its length
    {
        return true;
    }else{
        return false;
    }
    /* for(const key in obj){   // for in loop for object properties
                                the interpreter will enter the for-in loop, 
                                and therefore the first return statement false will be run and if it is empty, the interpreter will not enter the for-in loop
        return false;
    } return true; */
};