/* Given an array of asynchronous functions functions, return a new promise promise. 
Each function in the array accepts no arguments and returns a promise. All the promises should be executed in parallel.
 promise resolves:
When all the promises returned from functions were resolved successfully in parallel. The resolved value of promise should be an array of all the resolved values of promises in the same order as they were in the functions. The promise should resolve when all the asynchronous functions in the array have completed execution in parallel.
promise rejects:
When any of the promises returned from functions were rejected. promise should also reject with the reason of the first rejection.
Please solve it without using the built-in Promise.all function.
 */
 
/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function(functions) {
    return new Promise((resolve, reject) => {
        const total = new Array(functions.length);
        /* Creates an empty array (results) of the same length as the functions array. 
        This array will store the results of each function once they resolve.
        In our case: The results array will be created as:    results = [undefined, undefined, undefined]; */
        let count = 0;
        // Initializes a count variable to track how many promises have successfully resolved.
        functions.forEach((fn, index) => {
            /* This iterates over the functions array using forEach. For each function (fn), it also gives us the index i.
            In our case: It starts iterating over the array of functions, so for the first iteration, i = 0,
             for the second iteration, i = 1, and so on. */
            fn()
            /* Calls the current function fn(), which returns a promise.
            In our case:
            On the first iteration (i = 0), it calls functions[0](), which starts the setTimeout to resolve with 5 after 200ms.
            On the second iteration (i = 1), it calls functions[1](), which starts the setTimeout to resolve with 10 after 100ms
            On the third iteration (i = 2), it calls functions[2](), which starts the setTimeout to resolve with 15 after 300ms. */
            .then(value =>{
                // This is the .then() block that runs when the promise resolves successfully. The resolved value is passed to val.
                total[index] = value; // Store result at correct index
                count ++;             // Count how many succeeded
                if(count == functions.length){  //Once count reaches the same number as functions.length
                    resolve(total);   // All done → resolve main promise
                }
            })
            .catch(reason => reject(reason));  // If any promise is rejected,
                                            //  .catch() will catch it and immediately call reject() on the outer promise with the rejection reason.
        });
    });
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */