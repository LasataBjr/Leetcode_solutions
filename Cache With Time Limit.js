// Write a class that allows getting and setting key-value pairs, however a time until expiration is associated with each key.
// The class has three public methods:
// set(key, value, duration): accepts an integer key, an integer value, and a duration in milliseconds. 
// Once the duration has elapsed, the key should be inaccessible. 
// The method should return true if the same un-expired key already exists and false otherwise. 
// Both the value and duration should be overwritten if the key already exists.

// get(key): if an un-expired key exists, it should return the associated value. Otherwise it should return -1.
// count(): returns the count of un-expired keys.
// What is Cache With Time Limit?
// Imagine you store the result of a function in a "box" (cache). But you want that "box" to automatically expire after a certain time (say 2 seconds). 
// After that time, the stored result disappears and the function needs to run again!

var TimeLimitedCache = function() {
    this.cache = new Map(); // Using Map so we don't need a size variable
 };
 
 /** 
  * @param {number} key
  * @param {number} value
  * @param {number} duration time until expiration in ms
  * @return {boolean} if un-expired key already existed
  */
 TimeLimitedCache.prototype.set = function(key, value, duration) {
   if (this.cache[key] && this.cache[key].timer) {  //If the key exists inside this.cache
                                                    //And if it has a timer (meaning it is still active and not expired).
     clearTimeout(this.cache[key].timer);
     this.cache[key].value = value;
     this.cache[key].timer = setTimeout(() => {
       this.remove(key);
     }, duration);
     return true;
    //  You clear the old timer (so the old timeout is cancelled ✅). You update the value.
    //  You set a new timer for the new duration. You return true, because an unexpired key already existed.
   } else {
     this.cache[key] = {
       value: value,
       timer: setTimeout(() => {
         this.remove(key);
       }, duration)
     };
     return false;
   }
    // You create a new object: {value, timer} for the key. Set timeout to remove it after duration milliseconds.
    // Return false, because this is a new key.


 };
 
 /** 
  * @param {number} key
  * @return {number} value associated with key
  */
 TimeLimitedCache.prototype.get = function(key) {
   if (this.cache[key] && this.cache[key].timer) {
     return this.cache[key].value;
   } else {
     return -1;
   }
 };
//  If the key exists and still has a running timer → return the value. Otherwise → return -1.
 
 /** 
  * @return {number} count of non-expired keys
  */
 TimeLimitedCache.prototype.count = function() {
   let count = 0;
   for (const key in this.cache) {
     if (this.cache[key].timer) {
       count++;
     }
   }
   return count;
 };
//  Loop through all keys. If they have a running timer, it means they are active. Count the active keys.
//cache = Map {
                 // 1 => { value: 10, expire: 5000 },
                // 2 => { value: 20, expire: 6000 }
                // }
 // Because the value inside the Map is an object like { value: 10, expire: 5000 }.
 // You only care about expire when checking if the key is still active.
    

 TimeLimitedCache.prototype.remove = function(key) {
   delete this.cache[key];
 }; //Delete key when timer expires
      
 
 
 /**
  * const timeLimitedCache = new TimeLimitedCache()
  * timeLimitedCache.set(1, 42, 1000); // false
  * timeLimitedCache.get(1) // 42
  * timeLimitedCache.count() // 1
  */