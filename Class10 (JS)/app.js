// alert("Hello World");

// Console
// console.log("Hello World")
// console.log(23 + 35)

// document.write("Hello World" + "<br>")
// document.write(70+30)

//VARIABLES
// var country = "Pakistan";
// // console.log(country)
// // alert(country)

// var nationality = "Pakistani";

// var age = 25;

// var isFeePaid = true;

// var weight = 60.55;

// //Declaration and Initialization

// var age = 25; //OR

// var age; // Declaration
// age = 25; // Initialization

//number
// var weight = 56.78;

// var newWeight = weight + 20.55;

// console.log(newWeight)

//strings
// var name = "Mark";
// var nationality = 'US';
// var message = "What is your father's number";

//boolean

// var isFeePaid = true;

// var examPassed = false;

// var fname;

// console.log(fname);

// var car = undefined;

// var name = null;
// var nationality = "Mark";
// nationality = null;

// var userName = true;
// console.log(typeof(userName));//string

// var a = 4; // Statement 1
// var b = 2; // Statement 2
// var c = 0; // Statement 3
// c = a + b; // Statement 4
// alert(a); // Statement 4
// console.log(c); // Statement 4

// i= 5; j = 110; k = i + j

// var a = 5 // New line will end statement
// a * 4
// alert(a)
// console.log(a)

// var a = 5a * 4 // Error, Will Not work
// alert(a)console.log(a) // Error, Will not work

// a + b; // expression
// 4 / 2; // expression
// var a = 5;
// a * 4; // expression
// "John" + " " + "Doe"; // expression
/*
console.log("Devtrio")
console.log("Devtrio")
console.log("Devtrio")
console.log("Devtrio")
*/

// Legal names:

// var hello = 56;
// var _xyz = 44;
// var $work = 90;
// var user2 = 56;
// var i_info = 99;
// var my$work = 77;


// Illegal Names
// var 2user = 12;
// var my user = 23; // Can't contains space
// var hello#world = 34;
// var my-info = 44;
// var my?info = 45;
// var my*info = 45;

//case sensative
// var rose = "Red Rose";
// var Rose = "Pink Rose";
// var ROSE = "Black Rose";
// alert(rose);
// alert(Rose);
// alert(ROSE); // Error

// Camel Case

// var userResponse
// var userResponseTime
// var userResponseTimeLimit
// var response

// Arithematic Operators (+, -, *, /, %, **)
var a = 3;
var b = 3;

// var add = a + b;
// console.log(add)

// var sub = a - b;
// console.log(sub)

// var divide = a / b;
// console.log(divide)

// var mult = a * b;
// console.log(mult)

// var remainder = a % b;
// console.log(remainder)

// var pow = a ** b;
// console.log(pow);


// Assignment Operators

// // Example              Same as
// a += 5;                 a = a + 5;
// a -= 5;                 a = a - 5;
// a *= 5;                 a = a * 5;
// a /= 5;                 a = a / 5;
// a %= 5;                 a = a % 5;
// a **= 5;                a = a ** 5;

// Ambiguity

// var a = 5 + 2 * 3 - 2 / 2;
// //      7 * 3 - 1
// //       21 -1 = 20

// // DMAS
// // 5 + 2 * 3 - 1
// // 5 + 6 -1
// // 11 -1
// //10

// console.log(a)

// var a = 5 + 2 * (3 - 2) / 2;

// // 5 + 2 * 1 /2
// // 5 + 2 * 0.5
// // 5 + 1
// //6
// console.log(a)
// var a = 3 + 5 * 2; // result 13
// var b = 8 / 2 - 1; // result 3
// var c = 3 % 2 + 4 - 1; // result 4
// var d = a + 5 * c - b / (3 + b);// result 32.5



// var x = 5;
// var y = x + ++x + x + x++ + x + ++x;
// //      5 + 6  +  6 + 6  +  7 + 8;
// console.log(x); //8
// console.log(y)

// var x = 5;
// var y = x + ++x + --x + x-- + x++ + ++x + x + ++x + x++ + --x + x;
//     //  5 +  6  +  5  +  5  + 4  +   6  +  6 + 7  + 7   +  7  + 7
// console.log(x); //7
// console.log(y)

// Concat
// var firstName = "Owais";
// var middleName = "Ahmed";
// var lastName = "Khan";

// var fullName = firstName + " " + middleName + " " + lastName;
// console.log(fullName)


// var userName = "John";
// var userAge = 23;
// var userDesignation = "Software Developer";

// alert("User name is " + userName + " User age is " + userAge + " User Designation is " +  userDesignation);


// var a = "6" + 2; //62
// console.log(a) 
// var b = 3 + "6";//36 
// console.log(b)
// var c = "Hello " + 2;//Hello 2 
// console.log(c)
// var d = 2 + "Hello "; //2Hello
// console.log(d)
// var e = "Hello "+ 3 + 4; //Hello34 
// console.log(e)//Hello 34
// var f = 3 + 4 + "Hello ";
// console.log(f)//7Hello
// var g = "Hello "+ (3 + 4); 
// console.log(g)//Hello 7

//PROMPT
// var userName = prompt("Whats your name?", "Owais");
// console.log("User Name is " + userName);

// var question = "What is your name?";
// var defaultAnswer = "John";
// var name = prompt(question, defaultAnswer);
// console.log("Name = "+ name);


// Unary Operator
// var userAge = +prompt("Whats your age?");
// console.log(userAge + 20);
// console.log(typeof(userAge));

// var age = prompt("What is your age");//input 5
// var num = 4;
// var sum = parseInt(age) + num;
// console.log(sum); // result, 9

// var age = prompt("What is your age");//input abc
// var num = 4;
// var sum = parseInt(age) + num;
// console.log(sum); // result, NaN

// var age = prompt("What is your age");//input 5.5
// var num = 4;
// var sum = parseFloat(age) + num;
// console.log(sum); // result, 9.5
// var age = prompt("What is your age");//input 5.5
// var num = 4;
// var sum = age + Number(num);
// console.log(sum); // result, 9.5

// var a = Number(true); //returns 1
// var b = Number(false); //returns 0
// var c = Number("999"); //returns 999
// var d = Number("999 888"); //returns NAN
// var e = Number("Hello"); //returns NAN

