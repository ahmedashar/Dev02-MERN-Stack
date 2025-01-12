// console.log(a);
// var a = 2;
// var b; // declare
// b=2; // initialized
// console.log(a);
// console.log(a);
// let a = 2;


// function add(a,b){
    //     return a + b;
    // }
// console.log(add())
// let add = function(a,b){
//         return a + b;
//     }


// local vs global

// let name = "Ashar"; // global scope

// function printName() {
//     console.log(name);
//     function innerFunction(){
//         console.log(name);
//     }
//     innerFunction();
// }

// printName();

// let text = "Ashar";

// function printName(){
    
//     function innerFunction(){
//         console.log(text);
//     }

//     innerFunction();
// }

// printName();

// function outer(){
//     let username = "Ashar";

//     function inner(){
//         let code = "&*&@*^*&Q#";
//         console.log("inner",username);
//         console.log("code", code);
//     }
//     function innerTwo(){
//         console.log("innerTwo",username)
//         console.log("code", code);
//     }
//     inner();
//     innerTwo();
// }

// outer();


// let count = 0;

// function increment(){
//     count++;
//     return count;
// }

// function incrementTwo(){
//     count++;
//     count++;
//     return count;
// }

// console.log(increment()); //1
// console.log(increment()); //2
// console.log(increment()); //3
// console.log(incrementTwo()); //4
// console.log(increment()); //4


// function createCounter(){
//     let count = 0;
//     return function(){
//         count++;
//         return count;
//     }
// }

// const counter1 = createCounter();
// console.log(counter1())
// console.log(counter1())
// console.log(counter1())


// const counter2 = createCounter();
// console.log(counter2())
// console.log(counter2())
// console.log(counter2())