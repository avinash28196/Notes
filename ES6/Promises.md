[Promises for asynchronous programming](http://exploringjs.com/es6/ch_promises.html)
[ES6 Promises](http://2ality.com/2014/10/es6-promises-api.html)

# Promises
Promises are a pattern that helps with one particular kind of asynchronous programming: functions (or methods) that return their results asynchronously. To implement such a function, you return a promise, an object that is a placeholder for the result. The caller of the function registers callbacks with the promise to be notified once the result has been computed. The function sends the result via the promise.

## Creating and using promises.


```javascript
var promise = new Promise(
    function (resolve, reject) { // (A)
        ...
        if (...) {
            resolve(value); // success
        } else {
            reject(reason); // failure
        }
  });
  ```
  
A promise is always in either one of three (mutually exclusive) states:

Pending: the result hasn’t been computed, yet
Fulfilled: the result was computed successfully
Rejected: a failure occurred during computation
