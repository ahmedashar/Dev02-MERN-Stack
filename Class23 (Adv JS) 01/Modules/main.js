import { add, sub, mult, divide, y as lastName } from "./math.js";
import { fullName, x as firstName } from "./print.js";

console.log(`Add res ${add(23,25)}`)
console.log(`Substract res ${sub(100,25)}`)
console.log(`Mult res ${mult(4,10)}`)
console.log(`Divide res ${divide(2,2)}`)

fullName(firstName, lastName)