// callback hell (cons..)
// 1. code uncontrollable...
// 2. horizontally scale....


let cart = ['item1', 'item2', 'item3', 'item4'];
let perItemPrice = 200;


// const calculateBasket = (qty) => {
//     console.log(qty, 'qty');

//     setTimeout(() => {
//         let bill = qty * perItemPrice;
//         if (bill > 0) {
//             console.log("Total Bill: ", bill);
//         }
//     }, 2000);

// }

// const createOrder = (itemList, callBackCalcBasket) => {
//     setTimeout(() => {
//         let quantity = itemList.length;
//         if (quantity > 0) {
//             callBackCalcBasket(quantity)
//         }
//     }, 2000);
// }


// const qty = createOrder(cart, calculateBasket);
// const bill = calculateBasket(qty);
// console.log("Total Bill: ", bill);


// callback hell

// const createOrder = (itemList, callBackCalcBasket) => {
//     setTimeout(() => {
//         let quantity = itemList.length;
//         if (quantity > 0) {
//             setTimeout(() => {
//                 let bill = qty * perItemPrice;
//                 if (bill > 0) {
//                     console.log("Total Bill: ", bill);
//                     setTimeout(() => {
//                         let bill = qty * perItemPrice;
//                         if (bill > 0) {
//                             setTimeout(() => {
//                                 let bill = qty * perItemPrice;
//                                 if (bill > 0) {
//                                     setTimeout(() => {
//                                         let bill = qty * perItemPrice;
//                                         if (bill > 0) {
//                                             setTimeout(() => {
//                                                 let bill = qty * perItemPrice;
//                                                 if (bill > 0) {
//                                                     console.log("Total Bill: ", bill);
//                                                 }
//                                             }, 2000);
//                                         }
//                                     }, 2000);
//                                 }
//                             }, 2000);
//                         }
//                     }, 2000);
//                 }
//             }, 2000);
//         }
//     }, 2000);
// }


// const qty = createOrder(cart, calculateBasket);


/// callback hell solution (use Promises);;


const calculateBasket = (qty) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            let bill = qty * perItemPrice;
            bill = 0;
            if (bill > 0) {
                res(bill)
            } else {
                rej(new Error("Failed to fetch bill"));
            }
        }, 2000);

    })

}

const createOrder = (itemList) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            let quantity = itemList.length;
            if (quantity > 0) {
                res(quantity)
            } else {
                rej(new Error("Failed to fetch quantity"));
            }
        }, 2000);
    })

}

createOrder(cart).then(res => {
    return calculateBasket(res)
}).then(res => console.log("Your Bill =", res))
    .catch(err => console.log(err))
