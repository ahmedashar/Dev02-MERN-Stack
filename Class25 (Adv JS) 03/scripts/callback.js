// higher order function
function sum(n1, n2, appEnd) {
    console.log("App start");
    let a = n1;
    let b = n2;
    let c = a + b;
    appEnd(c);
}

// callback function
function appEndFun(result) {
    console.log("result= ", result);
    console.log("App end");
}


// sum(2, 3, appEndFun);
sum(2, 3, function (result) {
    console.log("result= ", result);
    console.log("App end");
});

