// console.log("Hello world")
function darkMode(){
    let container = document.getElementById("container");
    let lightImg = document.getElementById("lightImg")
    let darkImg = document.getElementById("darkImg")

    container.style.backgroundColor = "black";
    container.style.color = "white"

    lightImg.style.display = "inline";
    darkImg.style.display = "none";


}


function lightMode(){
    let container = document.getElementById("container");
    let lightImg = document.getElementById("lightImg")
    let darkImg = document.getElementById("darkImg")


    container.style.backgroundColor = "white";
    container.style.color = "black"

    lightImg.style.display = "none";
    darkImg.style.display = "inline";

}
















