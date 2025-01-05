// What is a Callback in JavaScript?
// A callback is a function that is passed as an argument to another function and is executed after some operation has been completed. It is a way to make functions asynchronous by letting another function dictate when a specific piece of code is executed.

// Callbacks are heavily used in JavaScript, especially in asynchronous operations like event handling, file reading, or making network requests.


// function greet(name, callback){
//     console.log(`Hello,  ${name}`)
//     callback();
// }

// function anotherFunction(){
//     console.log("I am in another function")
// }

// greet("Ashar", ()=>{
//     console.log("I am done with the greeting")
// })

// greet("ashar", anotherFunction);

// function fetchData(callback){
//     console.log("Fetching Data .... ");
//     setTimeout(()=>{
//         let data = {id:1, name:"Ashar"}
//         callback(data);
//     },5000)
// }


// function displayData(data){
//     console.log(`Data Received: ${data.id}, ${data.name}`)
// }

// fetchData(displayData)
// fetchData((data)=>{
//     console.log(data)
// })



// Promises in JavaScript
// A Promise in JavaScript is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

// States of a Promise
// Pending: Initial state, neither resolved nor rejected.
// Fulfilled: The operation completed successfully, and resolve() was called.
// Rejected: The operation failed, and reject() was called.

const myPromise = new Promise((resolve, reject) => {
    const success = true;
    if (success) {
        resolve(10);
    }
    else {
        reject("Promise rejected due to an error");
    }
})

myPromise
    .then((data) => {
        console.log(data,"<-success")
        return data * 2;
    })
    .then((data) => {
        console.log(data, "<-success after multiplying by 2")
        return data * 2;
    })
    .catch((data) => {
        console.log(data, "<-error")
    }) 
