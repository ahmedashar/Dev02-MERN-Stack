// //<p>Hello World</p>

// // Create a new paragraph element and insert in html div
// // let p = document.createElement("p");
let container = document.getElementById("container")

// // let paraText = document.createTextNode("Hello World")
// // p.appendChild(paraText)

// // container.appendChild(p)

function addElement(){
    var p = document.createElement("p");
    p.innerText = "Hello World";
    p.setAttribute("class", "red")
    p.setAttribute("id", "child")
    p.setAttribute("onclick", "removeContainerThroughChild()")

    container.appendChild(p);
}

function removeContainer(){
    container.innerHTML = "";
}


function removeContainerThroughChild(){
    var child = document.getElementById("child");
    var parent = child.parentNode;
    parent.innerHTML = ""
}


// let human = {
//     name: "Ashar",
//     male: true,
//     favFood: ["Biryani", "Burger", "Pizza"],
//     getName: function(){
//         return `My name is ${this.name}`
//     }
// }

// // access keys in Object
// console.log(human.name)
// // create property in Object
// human.age = 24;
// // modify property
// human.name = "Ahmed"
// // delete property
// delete human.male;

// console.log(human)

// console.log(human.getName())


