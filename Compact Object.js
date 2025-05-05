/* Given an object or array obj, return a compact object. A compact object is the same as the original object, except with keys containing falsy 
values removed. This operation applies to the object and any nested objects. Arrays are considered objects where the indices are keys. A value is
 considered falsy when Boolean(value) returns false. You may assume the obj is the output of JSON.parse. In other words, it is valid JSON. */
 /**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function(obj) {
    let result = {};
    //If the object is literally null, return null.
    if(obj === null )
        return null;
    //If it’s a primitive (like a number or string), return it as-is.
    if(typeof obj != 'object')
        return obj;
    /* If obj is an array:
    filter(Boolean) removes falsy values Then map(compactObject) recursively cleans remaining values. */
    if(Array.isArray(obj))
        return obj.filter(Boolean).map(compactObject);
    else if(typeof obj === 'object' && obj != null)
        for(const key in obj){
            let value = compactObject(obj[key]);  // recursively clean value
            if(value){ //If the cleaned value is truthy, add it to the result object.
                result[key] = value;
            }
        }
    return result;
};
