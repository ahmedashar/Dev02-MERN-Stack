// Arrays in JavaScript
// An array in JavaScript is a data structure that stores a collection of elements. These elements can be of various data types, including numbers, strings, booleans, objects, or even other arrays. Arrays are ordered, meaning each element has a specific index, starting from 0.

// Methods of an Array
// 1. Array.length  --> give length of array
// 2. Array.push --> add one or more element at the end of the array
// 3. Array.pop --> remove last element of array
// 4. Array.shift --> remove first element of array
// 5. Array.unShift -> add one or more element at the start of the array
// 6. Array.splice --> add or remove element on specific index of Array
// 7. Array.slice --> copy of array
// 8. Array.reverse

// var student1 = "Huzaifa"; 
// var student2 = "Iraj"; 
// var student3 = "Mustafa";

// syntax        0           1      2
var students = ["Hizafa", "Iraj", "Mustafa","Ashar", "Humza Amir", "John", "Ahmed", "Owais"];

// console.log(students)
// print specific value from array
// console.log(students[0])
// console.log(students[1])
// console.log(students[2])
// console.log(students.length);

// for(var i = 0; i < students.length; i++){
//     console.log(students[i])
// }

// push
// console.log(students)
// var pushReturn = students.push("Jahangir", "Salik Ali", "Danish");
// console.log(students)
// console.log(pushReturn)

//pop

// console.log(students);
// students.pop()
// var popReturn = students.pop()
// students.pop()
// console.log(students);
// console.log(popReturn);


// shift

// console.log(students)
// var shiftReturn = students.shift();
// console.log(students)
// console.log(shiftReturn);


// unshift

// console.log(students)
// var unShiftReturn = students.unshift("Ashar", "Ahmed");
// console.log(students)
// console.log(unShiftReturn)


// syntax
// splice(startIndex, deletedCount, "Value1", "Value2", "Value3");

// console.log(students);
// var spliceReturn = students.splice(2, 3, "Zaid")
// console.log(students)
// console.log(spliceReturn)


// console.log(students);
// let copyStudent = students.slice(0,3)
// let copyStudent = students.slice(3)
// let copyStudent = students.slice(-2)
// console.log(copyStudent)

// console.log(students);
// let reverseStudent = students.reverse();
// console.log(reverseStudent)

// Funtions in JS

// function declaration

// function myCode(){
//     console.log("Hello World");
//     console.log("Hello World");
//     console.log("Hello World");
// }

//calling a function
// myCode();

// parameter and arguments in functions
// function printMyName(name){  //parameter
//     console.log("My Name is " + name);
// }


// printMyName("Ashar") // arguments
// printMyName("Owais") // arguments
// printMyName("Khan") // arguments

// function printFullName(fName, lName){
//     console.log("My Full Name is " + fName + " " + lName);
// }

// printFullName("Ashar", "Ahmed")
// printFullName("Owais", "Khan")


// function Add(a,b){
//     console.log(a+b);
// }

// Add(12,25)

// var num1 = 10;
// var num2 = 20;

function Subtract(num1 = 5, num2 = 2){
    // console.log(num1-num2)
    return num1 - num2;
}

// Subtract(10 , 5);

var returnSub = Subtract(10 , 5);

console.log(returnSub);

