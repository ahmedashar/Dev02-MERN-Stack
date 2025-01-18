// Data Hiding is Abstraction...
// Data Binding is Encapsulation.... 


class Person {
    #name;
    #age;

    constructor(n, a) {
        this.#name = n;
        this.#age = a;
    }

    getPersonDetails() {
        console.log(`${this.#name} age is ${this.#age}`);
    }

    getPersonAge() {
        return this.#age;
    }
}


let person = new Person("Abdullah", 22);
let person2 = new Person("Malik", 25);
person.getPersonDetails();
console.log(person.getPersonAge());
console.log(person2.getPersonAge());


