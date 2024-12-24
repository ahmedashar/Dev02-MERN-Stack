console.log("Welcome in Adv JS")

//VAR, LET, CONST
// let userName = "Ashar"
// let userAge = 23;
// {

//     let userAge = 30;
//     let userName ="Owais"
//     // var a = 23;
//     // let b = 30;
//     // const c = 45;
//     console.log(userAge)
// }


// console.log(userName)
// console.log(a, b, c)
// console.log(a)
// console.log(b)
// console.log(c)

// let userName = "Ashar";
// {
//     // let userName = "Owais";
//     {
//         // let userName = "Malik";
//         console.log(userName)
//     }

//     // console.log(userName)
// }

//ternary operator => shorthand for conditional statements
// syntax: (condition) ? true : false
// const x = 7

// if(x > 5){
//     console.log("x is greater than 5")
// }
// else{
//     console.log("x is less than 5")
// }

// const messg = x > 5 ? 'x is greater than 5' : 'x is less than 5'

// console.log(messg)

// const temp = 45;

// const weather = temp > 40 ? 'Hot weather' : 'Moderate weather';
// console.log(weather)

// Template Litrals (Backtics ``)

// let userName = "Owais Ahmed Khan";

// console.log("User name is " + userName);
// console.log(`User name is ${userName}`)

// const age = 17;
// console.log(`User Age is ${age}. You are ${age >= 18 ? 'an adult' : 'a minor'}`)

// const userInput = null;

// const res = userInput !== null ? userInput : 'Default'; 
// console.log(res)


//Normal functions VS ArrowFunctions
// console.log(sayHello('Devtrio'))


// function sayHello(name){
//     return 'Hello ' + name
// }

// console.log(sayHello('Devtrio'))

//Arrow Func
// console.log(sayHello('Devtrio'))

// const sayHello = (name) => {
//     return 'Hello ' + name
// }

// console.log(sayHello('Devtrio'))

// const sayHello1 = (name) => 'Hello ' + name;
// const sayHello2 = (name) => 'Hello ' + name;

// console.log(sayHello1('Aneeq'))
// console.log(sayHello1('Abdullah'))

// const myName = (name) => ( `My name is ${name}`)

// const myName = (name) => {
//     return `My name is ${name}`
// }

// console.log(myName('Owais Ahmed Khan'))

// const isEven = num => num % 2 === 0 ? 'Even' : 'Odd';
// console.log(isEven(5))
// console.log(isEven(2))
// console.log(isEven(6))

// '23' + '45' = 2345
// 23 + 45 = 68
// const number = +prompt("Enter any number")
// console.log(typeof(number))

//SHORT CIRCUITS
// && AND

// const isLoggedIn = false;
// isLoggedIn && console.log('User is log In')

// const age = 17;
// age >= 18 && console.log('You are an adult')

// || OR

// const defaultVal = 'Default Valuee';
// const userInput = 'abcc'
// const value = userInput || defaultVal;

// console.log(value)

// const username = null;
// const displayName = username || 'Guest';
// console.log(displayName);


// const fetchData = () => {
//     //Async api data
//     console.log('Fetching Data...')
// }

// const shouldFetchData = false;
// shouldFetchData && fetchData();

//Optional Chaining ?
const user = {
    name : 'Owais',
    address: {
        city: 'Karachi'
    }
};

const city = user.address && user.address.city;
console.log(city);

user && console.log(user?.address?.city);


// if(user && user.address && user.address.city){}

































