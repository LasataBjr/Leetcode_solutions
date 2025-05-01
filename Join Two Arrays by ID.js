/* Given two arrays arr1 and arr2, return a new array joinedArray. All the objects in each of the two inputs arrays will contain an id field 
that has an integer value. joinedArray is an array formed by merging arr1 and arr2 based on their id key. The length of joinedArray should 
be the length of unique values of id. The returned array should be sorted in ascending order based on the id key. If a given id exists in one 
array but not the other, the single object with that id should be included in the result array without modification. 
If two objects share an id, their properties should be merged into a single object:
If a key only exists in one object, that single key-value pair should be included in the object.
If a key is included in both objects, the value in the object from arr2 should override the value from arr1. */

/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
    const map = new Map();
    //We create a Map to store objects by their id.
    //This helps in fast lookup and avoiding duplicate ids.
    for(const obj of arr1) map.set(obj.id, obj); //We loop through arr1 and add each object to the map, using id as the key.
    /* If map doesn't have that id, we just add it.
    If it does, we merge properties — 
    arr2 overwrites the values of arr1. */
    for(const obj of arr2) {
        if(!map.has(obj.id)) map.set(obj.id, obj);
        else {
            const prevObj = map.get(obj.id);
            for(const key of Object.keys(obj))
                 prevObj[key] = obj[key];
        }
    }
    //Convert map back to an array
    const res = new Array();
    for(let key of map.keys()) res.push(map.get(key));
    //Sort the result by id
    return res.sort((a,b)=>a.id-b.id);
};
/* We start by creating a new Map object called map. A Map is used to efficiently store and retrieve key-value pairs.
We iterate over each object in arr1 using a for-of loop. For each object, we set its ID as the key and the entire object as the value in the map.
Next, we iterate over each object in arr2 using another for-of loop. For each object, we check if its ID already exists as a key in the map.
If the ID does not exist in the map, we set the ID as the key and the entire object as the value in the map. This ensures that the object is included in the res array without modification.
However, if the ID already exists in the map, we retrieve the existing object using map.get(obj.id). We then iterate over each property of the current object using Object.keys(obj).
For each property, we update the corresponding property of the existing object with the value from the current object. This merging process ensures that values from arr2 override values from arr1 when the objects share the same ID.
After merging all the objects, we create an empty array called res to store the final result.
We iterate over the keys of the map using map.keys(). For each key, we retrieve the corresponding object using map.get(key) and push it into the res array.
Finally, we sort the res array in ascending order based on the ID using the sort method along with a comparator function (a, b) => a.id - b.id. This ensures that the objects are arranged in the correct order based on their IDs.
In the end, we return the sorted res array as the final result of the join function. */