// Static variables are shared among all instances of the class
// and can be accessed without creating an instance of the class



class Person {
    name;
    age;

    static count = 0;

    constructor(n, a) {
        this.name = n;
        this.age = a;
        Person.count++;
    }

}


let p = new Person("Ashar", 22);
let p2 = new Person("Owais", 22);


console.log(Person.count);
