// OBJECT ORIENTED PROGRAMMING IN JAVASCRIPT

/* JavaScript introduced the class syntax in ECMAScript 2015 (ES6), which provides a more
   familiar way to implement object-oriented programming, especially for developers coming
   from class-based languages. Under the hood, JavaScript's classes are still based on
   prototypes, but the syntax resembles traditional class-based languages.. */

// Classes are syntactical sugar over the existing prototype-based inheritance model.

// Classes and object 
// classes consist of attributes/properties and behaviors/method

class Person {
   name;
   age;

   constructor(n, a) {
      this.name = n;
      this.age = a;
   }
}


let personOne = new Person('Owais', 22);
let personTwo = new Person('Ashar', 22);
console.log(personOne, personTwo);



// Object Oriented programming fundamentals...
// Encapsulation, Abstraction, Inheritance and Polymorphism