/**
 * filter numbers from an array
 * 
 * [1,2,3,4,true, 'zhangyu'] -> [1,2,3]
 */

 var input = [1,2,3,4,true, 'zhangyu']

 function filterNumbers()
 {
     //For loop to iterate over all the elemnts in the input array
    var output = new Array();
    var outputCounter = 0; 
     for (counter=0; counter < input.length; counter++){
     console.log('type of the element that i encountered: ' + input[counter] + 'and its type is = ' + typeof input[counter]);
     //if the type of input element is number
     if (typeof input[counter] == "number"){
         output[outputCounter] = input[counter];
         outputCounter++;
     }
    }
     console.log(output)
 }
 
/**
 * result is a varibale that stores the output of the filter function
 * 
 * Filter function
 * 1. filter values based on a condition
 * 
 * condition
 * 1. typeof element should be a number 
 */


     var result = input.filter(function(value)
     {
        return typeof value == 'number';
     });
     console.log(result);


     /**
      * Slice and Splice
      * 
      * [1,2,3,4,5,6,7,8,9,10]
      * 
      * slice (2) = everything after removing the elements till the 2nd index (0 and 1)
      * 
      * splice = give me the elements that were removed. (give me what we are not selecting)
     */
