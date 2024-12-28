import employees from "./data.js";

console.log(employees);

const fullNames =  employees.map((item) => (
    { fullName: `${item.firstName} ${item.lastName}`, ...item }
))

console.log(fullNames)

const filterHREmp =  employees.filter((item)=>(
    item.department == "Human Resources" && item.salary >= 40000 && item.salary <= 60000
))

console.log(filterHREmp)


const filtersss= employees
.filter((item) => item.department == "Human Resources")
.reduce((acc,curr) => acc + curr.salary,0)

console.log(filtersss)
