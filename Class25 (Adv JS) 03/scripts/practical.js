function MyMap(arr, callback) {
    let new_arr = []
    for (const element of arr) {
        const res = callback(element);
        new_arr.push(res);
    }
    return new_arr;
}

let arr = [1, 2, 3, 4, 5];

// let double2 = arr.map((elem) => elem * 2)
// console.log(double2);

let double = MyMap(arr, (elem) => elem * 2)
console.log(double);