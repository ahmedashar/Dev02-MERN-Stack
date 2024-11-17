

//syntax of switch
// switch (key) {
//     case value:

//         break;

//     default:
//         break;
// }

// var light = "green";

// switch (light) {
//     case "red":
//         console.log("Stop!");
//         break;
//     case "yellow":
//         console.log("Slow Down!");
//         break;
//     case "green":
//         console.log("Go!");
//         break;
//     default:
//         console.log("Invalid traffic light color!");
//         break;
// }


// var day = 0;

// switch (day){
//     case 0:
//         console.log("Today is Sunday");
//         break;
//     case 1:
//         console.log("Today is Monday");
//         break;
//     case 2:
//         console.log("Today is Tuesday");
//         break;
//     case 3:
//         console.log("Today is Wednesday");
//         break;
//     case 4:
//         console.log("Today is Thursday");
//         break;
//     case 5:
//         console.log("Today is Friday");
//         break;
//     case 6:
//         console.log("Today is Saturday");
//         break;
//     default:
//         console.log("Invalid day number!");
//         break;
// }


// termary operator

// var gender = "Male";

// gender === "Male" ? console.log("Male") : console.log("Female");

// if (gender === "Male"){
//     console.log("Male");
// }else{
//     console.log("Female");
// }


// var light = "red";

// light === "green" ? console.log("Go") : light === "yellow" ? console.log("Slow Down") : console.log("Stop!")


//  Three types of Loops
// 1. For Loop
// 2. While Loop
// 3. Do While Loop

//  i) initialization ii) condition iii) logic (increment / decrement)

// var i = 1; //initialization, run only first

// while (i <= 10) { //condition
//     console.log(i);

//     i++; //logic
// }

// i.  i == 1 --> true;
// ii. i == 2 --> true;
// iii. i == 3 --> true;
// iv. i == 4 --> true;
// v. i == 5 --> true;
// vi. i == 6 --> false


// var i = 10;

// while(i >= 1){
//     console.log(i);
//     i--
// }


// for(iteration; conditon; logic){
//     console.log(i)
// }


// for(var i = 1; i <= 10 ; i++){
//     console.log(i);
// }
// for(var i = 10; i >= 1 ; i--){
//     console.log(i);
// }

// var tableNumber = prompt("Enter Table Number");
// var limit = prompt("Enter Limit");

// for(var i =1; i <= limit ; i++){
//     console.log( tableNumber + " x " +i+ " = " + i*tableNumber)
// }


// var i = 11;
// do {
//     console.log(i)
//     i++;
// } while (i <= 10);