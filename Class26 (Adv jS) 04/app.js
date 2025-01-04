console.log("Hello in Async JS")
//Async Topics
//setTimeout(func, time(secs)) 2000=2secs 
// console.log("Owais")
// console.log("Ashar")
// console.log("Malik")
// setTimeout(function() {
//     console.log("100 Names printing in proccess...")
// }, 7000);
// console.log("Haris")
// console.log("Usama")
// console.log("Afzal")
// setTimeout(function() {
//     console.log("50 Names printing in proccess...")
// }, 5000);
// console.log("Wamiq")
// console.log("Amr")
// setTimeout(function() {
//     console.log("25 Names printing in proccess...")
// }, 4000);
// //another way
// const devtrio = function(){
//     console.log("Async JS Class By Devtrio")
// }

// setTimeout(devtrio, 3000)

// //Example 2 
// const chngeHeading = function(){
//     document.querySelector('h1').innerHTML = "Change text by Async JS File"
// }

// let devtrioTimeout = setTimeout(chngeHeading, 3000)

// // clearTimeout(devtrioTimeout)
// document.querySelector('#stopBtn').addEventListener('click', function(){
//     clearTimeout(devtrioTimeout);
//     alert("Process stopped successfully")
// })
///////////////////////////////////////////////////////////////////////////////////////
//setInterval
//Example 1
// const sayMe = function(){
//     console.log("Welcome in DevTrio!!")
// }

// setInterval(sayMe, 2000);
// //Example 1
// const sayMe = function(){
//     console.log("Welcome in DevTrio!!", Date())
// }

// let sayMeFunc = setInterval(sayMe, 2000);

// // clearInterval(sayMeFunc)

// document.querySelector('#stopBtn').addEventListener('click', function(){
//     clearInterval(sayMeFunc);
//         alert("Process stopped successfully")
//     })

const sayHello = function(str){
    console.log(str, Date())
}

setInterval(sayHello, 2000, "Hello In DevTrio")















