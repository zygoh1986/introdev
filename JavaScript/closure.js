//Global scope variable
// var name = 'Vaibhav';

// var fullName = (function() {
//     var name = 'Vai';
//     return function() {
//         name = name + ' ' + 'Vashishtha'; 
//         console.log(name);
//     };
// })();

// alert(fullName());

/**
 * To create a process to update a counter
 */
//var counter = 0;

/**
 * Based on the option increment / decrement a counter
 * @param {*} option 
 
function updateCounter(option) {

    //Local scope
    //1. I need the variable in local scope for sure that
    //2. I need access to the update value of this counter 
    if (option == 'increment') {
        counter++;
    } else if (option == 'decrement') {
        counter--;
    }
}

var randomCounter = function()
{
    counter = 100;
}

*/
/**
 * Create a variable that is defined as an anonymous function
 * 
 */

 var updateCounter = (function()
 {
     var counter = 0;
     return function()
     {
         counter++;
         return counter;
     }
 })();

alert(updateCounter());
alert(updateCounter());
alert(updateCounter());

function getCounterValue() {
    return counter;
}