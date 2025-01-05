
// The fetch method in JavaScript is used to make HTTP requests. It is a modern replacement for XMLHttpRequest and is built on Promises, making it easier to handle asynchronous operations.
// function fetchData() {
//     fetch("https://fakestoreapi.com/products")
//         .then((response) => {
//             return response.json()
//         })
//         .then((data) => {
//             displayData(data)
//             displayCard(data)
//         })
//         .catch((error) => {
//             console.error("Error:", error);
//             document.getElementById("content").innerHTML = `<div class="alert alert-danger" role="alert">
// Something went wrong, Please try again later"
// </div>`
//         });
// }

async function fetchData(){
    try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json()
        displayData(data)
        displayCard(data)
        
    } catch (error) {
        console.log(error)
    }
}


function displayData(data) {
    console.log(data)
    let TableHTML = `<table class="table">
                <thead>
                  <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Title</th>
                    <th scope="col">Price</th>
                    <th scope="col">Rating</th>
                  </tr>
                </thead>
                <tbody>`

    data.forEach((item, key) => {
        TableHTML += `
            <tr>
                 <td>${item?.id}</td>
                 <td>${item?.title}</td>
                 <td>${item?.price}</td>
                 <td>${item?.rating?.rate}</td>
            </tr>
        `
    })

    TableHTML += `</body> </table>`
    document.getElementById("content").innerHTML = TableHTML;
}
function displayCard(data) {
    let cardHTML = "";
    data.forEach((item) => {
        cardHTML += `
        <div class="col-3" >
        <div class="card" style="width: 18rem;">
            <img src="${item?.image}"  class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${item?.title}</h5>
                    <p class="card-text">${item?.description}</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
               </div>
        </div>
        </div>
        `
    })
    document.getElementById("cards").innerHTML = cardHTML;
}



fetchData()