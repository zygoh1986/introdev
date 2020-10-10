/**
 * Three part to the promise
 * 
 * 1. request 
 * 2. wait for a response, if i do not need or want to wait then i can create a promise
 * 3. Where there is a promised return
 *      promise can be responded to success or failure
 *          success -> resolved promise
 *          failure -> rejected promise
 *
 * 
 *          fetch -> then -> operate on the data and 
 *          promise -> execute the function that you need to wait for a response on -> then evaluate success of failure
 */

 var promise = new Promise (function(resolve, reject)
 {
     const x = "testpromise";
     const y = "letstestpromises"

     if( x === y)
     {
         resolve();
         
     }else
     {
         reject();
     }
 });

 promise. 
 then(function() {
     console.log('success!')

 }).
 catch (function()
 {
     console.log('failure!');
 });

 var promise1 = new Promise(function(resolve, reject)
 {
     setTimeout(function(){
         resolve('hello world');
     }, 2000);

 })