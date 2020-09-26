/**
 * Type of Control Structure
 * 1. If
 *      The argument passed to the function is a number; check if it is greater 5;
 * 2. If else
 * 3. if else if
 * 4. switch
 */


 /**
  * 
  * if condition is true then execute statment
  */



 function ifControl(inputNumber)
 {
     switch (inputNumber)
     {
         case 1: {
             alert("I am 1");
             break;
         }
         case 2: 
         {
            alert("I am 2");
            break;
         }

         case 3: 
         {
            alert("I am 3");
            break;
         }

         default: 
         {
             console.log('Inside siwtch case default');
             alert('Default case')
             break;
         }
     }
     //console.log('function is called');
    //var inputNumber = 9;
     //if (inputNumber > 10)
    // {
     //    console.log('condition is true');
      //   alert("number is greater than 10");
   //  } 
    // else if (inputNumber > 5) {
    //     alert('Greater than 5!')
    // }

 }