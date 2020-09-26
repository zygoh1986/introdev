/**
 * Create a person class with common attributes (firstname, lastname)
 */

 // Step 1

 function Person(firstName, lastName)
 {
     this.firstName = firstName;
     this.lastName = lastName;
 }

 //step 2
 function Teacher(firstName, lastName, insitituteName, teacherID)
 {
Person.call(this, firstName, lastName);
     this.insitituteName = insitituteName;
     this.teacherID = teacherID;

 }
// step 3 
 Teacher.prototype = new Person();
 Teacher.prototype.constructor = Teacher;

 // step 4 - initialize an object
 var teacher = new Teacher('ZY', 'GOH', 'Mages', 123);