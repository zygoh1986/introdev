function basics()
{
    var number = 1; 
    var booleanVariable = true;
    var text = "hello";
    var nullValue = null;
    var newDate = new Date();
    var number2 = 2;

    var sum = number + number2;
    var sub = number - number2;
    var multi = number * number2;

    console.log('add two number' + sum);
    console.log('sub' + sub);
    console.log('multi' + multi);
    console.log('Increment' + number++);
    console.log('Increment' + ++number);

    //number ++ -> number = number + 1

    //Conditional Operators

    console.log(number==number2);
    console.log(number!=number2);

    //Assignment Operators
    console.log(number);
    number+=1;
    console.log(number);
    number-=3;
    console.log(number);
    var number3 = 2;
    var modulus = 10;
    console.log(number3%10);
    console.log(number3/10);
    number3+=number; //number 3 = number3 + number
    console.log(number3);

    //There are multiple conditions that need to be tested
    // 1. There are two numbers, check if each is greater than 1
      //2. If any of the number is greater than 1
    var x = 10;
    var y = 0;

    console.log(x>1 && y>1);
    console.log(x>1 || y>1);
    console.log(!(x>1 || y>1));

    console.log(1<x<5)
  
}