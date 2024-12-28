// Destructuring --> Improve the code resuability
// Destructuring is a way to extract multiple values from data stored in objects and arrays.

// 1. arrray destructuring
// const fruits = ['apple', 'banana', 'mango', 'orange', 'grapes'];
// // const [first, second] = fruits;
// const [, , third] = fruits;

// console.log(third)

// 2. object destructuring
// const person = {
//     name: 'John',
//     age: 25,
// }
// // const {name, age} = person;
// const {name: firstName, age: year} = person;

// console.log(firstName, year);

// Spread Operator and Rest Operator

// 1.Rest Operator --> collects all remaining elements into an array or object.
// eg: used in destructuring or funtion parameter

// const [first, second, ...others] = fruits;

// console.log(first)
// console.log(second)
// console.log(others)

// let numbers = [1, 2, 4, 5, 6, 7, 8, 9];
// function sum(...numbers) {
//     console.log(numbers)
//     let total = 0;
//     for (var i = 0; i < numbers.length; i++) {
//         total += numbers[i]
//     }
//     return total;
// }

// console.log(sum(1,2,3,4,5,6,7,8,9,10,11))

//2 Spread Operators --> Expands arrays or objects
// eg --> used to make copy, merge, or as a aguement



// const person1 = {
//     name: "John", 
//     age: 23
// }

// const person2 = person1;
// person2.gender = "male"

// console.log(person1)
// console.log(person2)


// const person1 = {
//     name: "John", 
//     age: 23
// }
// const person2 = {...person1}
// person2.gender = "male"

// console.log(person1)
// console.log(person2)


// let num1 = [1,2,3];
// let num2 = [4,5,6];
// //             [1,2,3,4,5,6] 
// let totalNum = [...num1, ...num2];
// console.log(totalNum)


// Higher Order Functions --> Map, Filter and Reduce
// Map --> Transform data
// Filter --> Filter data
// Reduce --> Reduce data

// let numbers = [1,2,3,4,5,6,7,8,9,10];

// let doubleNumbers = [];
// for (let i = 0; i < numbers.length; i++) {
//     doubleNumbers.push(numbers[i]*2)
// }

// console.log(doubleNumbers)

// const doubleNumbers = numbers.map((item, key)=>{
//     return item*3
// })
// const doubleNumbers = numbers.map((item, key)=> item*3 )
// const doubleNumbers = numbers.map((item, key)=> (
//     `${item} a`
// ) )

// console.log(doubleNumbers)

// let data = [
//     {
//         name: "John",
//         age: 23
//     },
//     {
//         name: "Doe",
//         age: 25
//     },
//     {
//         name: "Smith",
//         age: 28
//     },
//     {
//         name: "John",
//         age: 30
//     }
// ]

// let newData = data.map((item)=>(
//     {name: item.name}
// ))

// console.log(newData)

// let filterData = data.filter((item)=> item.name == "John")

// let filterData = data.filter((item)=> item.age > 25);  

// let filterData = data.filter((item)=> item.name =="John" && item.age > 25)

// console.log(filterData)


let ages = [10, 23, 32, 24, 18, 48, 52, 8, 19];

// multiple all the ages by 2 and then filter the ages which are greater than 40


// let doubleAge = ages.map((item)=>(item*2))
// console.log(doubleAge)
// let filterAge = doubleAge.filter((item)=> item > 40)
// console.log(filterAge)

//chaining

// let filterAges = ages
//                 .map((item)=> item*2)
//                 .filter(item=> item > 40)

// console.log(filterAges)

// let total = 0;
// for (var i = 0; i < ages.length; i++) {
//     total += ages[i]
// }

// console.log(total)

// let total = ages.reduce((acc, current)=>{ 
//     console.log(acc, current)
//     return acc + current
// },0)

// console.log(total)






