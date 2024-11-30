console.log("Hello world")
//  DOM:Document Object Model
    // //  getElementById, getElementClassName, getElementBytagname, querySelector(class . || id #, querySelectorAll)

// document.getElementById("para").innerText = "Welcome in Dom Class.";

// querSelector
// document.querySelector("#para").innerText = "Hi, from QuerySelector!!"

// innerHTML && innerText

// document.getElementById("para").innerText = "<h1>Welcome in Dom Class.</h1>";
// document.getElementById("para").innerHTML = "<h3>Welcome in Dom Class.</h3>";
// let myDiv = document.getElementById("myDiv");
// console.log(myDiv)

// let greenItems = document.getElementsByClassName("green")
// let greenItems = document.querySelectorAll(".green")

// console.log("Elements with green color:", greenItems)

// let allPara = document.querySelectorAll('p')
// console.log("All para", allPara)

// DOM WITH FORM Inputs

function register(){
    let userEmail = document.querySelector("#useremail").value;
    let userPass = document.querySelector("#userpass").value;

    if(userEmail == "" && userPass == ""){
        alert("Please fill all fields")
    }
    else if(userEmail == "admin@gmail.com" && userPass == "123"){
        alert("Admin Login Success")
    }
    else{
        alert("Your email is " + userEmail + " your password is " + userPass)
    }

}

//addEventListerner
function displayDate(){
    document.getElementById("currDateTime").innerHTML = Date();
}

let myBtn = document.querySelector("#myBtn");

myBtn.addEventListener("click", displayDate);












