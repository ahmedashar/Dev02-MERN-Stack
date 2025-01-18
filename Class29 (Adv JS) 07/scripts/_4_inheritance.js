//  Inheritance is a fundamental concept in object-oriented programming (OOP) 
//  that allows classes to inherit properties and behaviors from other classes.
//  Inheritance promotes code reuse and allows for the creation of hierarchical
//  relationships between classes.


// student contain => name, age, department, rollNo

// teacher contain => name, age, subject,emp_id, salary

// need to create parent class for both.. call Person...



class Person {
    name;
    age;

    constructor(n, a) {
        this.name = n;
        this.age = a;
    }
}

class Teacher extends Person {
    emp_id;
    salary;
    constructor(n, a, id, s) {
        super(n, a)
        this.emp_id = id
        this.salary = s
    }

    getTeacherName() {
        return this.name;
    }

}
let teacherOne = new Teacher("owais", 22, 11, 1000000);
console.log(teacherOne.getTeacherName());
console.log(teacherOne);

