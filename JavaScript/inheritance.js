/**
 * prototypal Inheritance 
 * Example of creating inheritance (workaround)
 * 1. Create a class person object
 * 2. create a class student
 * 3. make sure or create a parent -> child relation between person and student
 */

 function Person (firstName, lastName)
 {
     this.FirstName= firstName;
     this.LastName = lastName;
 }

 Person.prototype.getFullName = function()
 {
     return this.FirstName + " " + this.LastName;
 }

 function Student(firstName, lastName, instituteName, score)
 {
     Person.call(this, firstName, lastName);
     this.InstituteName = instituteName;
     this.Score = score;
 }

 Student.prototype = new Person();
 Student.prototype.constructor = Student;

 var student = new Student ("ZY", "GOh", "Mages", 100);

 alert(student.getFullName());
 
