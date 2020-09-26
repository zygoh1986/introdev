/**
 * Create a normal function that we are used to
 * 
 * Change it anomymous function
 * 
 */

 function sum ()
 {
     alert(1+2);
 }

 var sum1 = function()
 {
    alert(1+3);
 }

 function addNumber()
 {
     sum();
 }

 var number1 = function()
 {
     return 1; 
 }

 var number2 = function()
 {
     return 5; 
 }



 function addTwoNumbers()
 {
     alert(number1()+number2());

 }