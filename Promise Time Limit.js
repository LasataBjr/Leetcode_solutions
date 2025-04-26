// Given an asynchronous function fn and a time t in milliseconds, return a new time limited version of the input function. 
// fn takes arguments provided to the time limited function.
// The time limited function should follow these rules:
// If the fn completes within the time limit of t milliseconds, the time limited function should resolve with the result.
// If the execution of the fn exceeds the time limit, the time limited function should reject with the string "Time Limit Exceeded".


/*
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function(fn, t) {
    
    return async function(...args) {
        const task = fn(...args); //it returns a promise
        const timeout = new Promise((_, reject) => 
        setTimeout(() => reject("Time Limit Exceeded"), t)); //a timeoutPromise that rejects  after t milliseconds.          
        return Promise.race([task, timeout]); //After waiting for time milliseconds, if the original promise has not finished yet, this timeout will force a rejection saying "Time Limit Exceeded".
    }
};

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */