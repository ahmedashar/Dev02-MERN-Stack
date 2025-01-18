// Polymorphism in JavaScript refers to the ability of objects to be treated as instances
//  of their parent class or any of their subclasses interchangeably. This allows for the same
// interface (method or property) to be used for different types of objects. JavaScript achieves
//  polymorphism through inheritance and method overriding.



class Person {
    name;
    age;

    constructor(n, a) {
        this.name = n;
        this.age = a;
    }

    isPlaying() {
        console.log(`${this.name} is a person who play cricket`);
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

    isPlaying() {
        console.log(`${this.name} is a teacher who play cricket`);
    }

}
let personOne = new Person("Ashar", 22);
let teacherOne = new Teacher("owais", 22, 11, 1000000);


personOne.isPlaying();
teacherOne.isPlaying();

