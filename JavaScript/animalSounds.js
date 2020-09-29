function barks()
{
    alert('dog bark')
}

function meow()
{
    alert('Cat Meow')
}
function neh()
{
    alert('Horse Neh')
}

/**
 * 
 * Car - Super Class
 * 
 * SUV - Type of car
 * MPV
 * Hatchback
 * 
 * SUV
 * Merc GLA (object of a type)
 * BMW x 3
 * 
 * 1. Define the properties and behaviors of each of these classes 
 * 2. Create the classes
 * 3. Create the inheritance relationship between the classes
 * 4. Create object of the different types of carsGreat
 */



/**
 * A dog barks
 * 
 * 1. What is my entity? - Dog
 * 2. What is the property of my entity? (4 legs, 2 eyes and 2 ears/ if it is a pet dog?)
 * 3. What is the behaviour of my entity? - barks
 * 4. What is my class or entity type of - Dog it is of type animal
 * 5. Can i use common attribute from the type of my entity?
 */

 /**
  * 
  * Dog / Cat / Horse are all animals
  * 1. Create an animal 
  * 2. property
  * 3. Behaviour
  */

function Animal(sound)
{
    this.sound = sound;
}

 //class / constructor (first word capital D is class)
 function Dog(isDogAPet)
 {
    this.isDogAPet = isDogAPet;
 }

 //dog is an animal
 Dog.prototype = new Animal(); //all prototype must be a instance 
 Dog.prototype.constructor = Dog;
 
 Dog.prototype.barks = function()
 {
     alert('dog barks');
 }

//object of class Dog
var dog1 = new Dog (true);
var dog2 = new Dog (false);