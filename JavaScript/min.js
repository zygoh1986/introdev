/**
 * problem statement
 * you want to find of the two numbers provided you as input
 * 
 */

 /**
  * 1. Behavior - function (name of the function) - find the minimum
  * 2. input - two numbers
  * 3. output - one number
  * cases
  * 1. number 1 < number 2
  * 2. number 2 < number 1
  * 3. number 1 = number 2
  */

  function findMinimum (number1, number2)
  {
      var minimumNumber = 0;
      if(number1 < number2)
      {
          minimumNumber = number1; 
      }
      else if (number1 > number2)
      {
          minimumNumber = number2;
      }
      else {
          return 0;
      }
      return minimumNumber;
  }