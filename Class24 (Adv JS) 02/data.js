const employees = [
    { id: 1, firstName: "John", lastName: "Doe", age: 30, department: "Sales", position: "Sales Manager", salary: 60000 },
    { id: 2, firstName: "Jane", lastName: "Smith", age: 28, department: "Marketing", position: "Marketing Specialist", salary: 50000 },
    { id: 3, firstName: "Michael", lastName: "Johnson", age: 35, department: "Human Resources", position: "HR Manager", salary: 65000 },
    { id: 4, firstName: "Emily", lastName: "Williams", age: 32, department: "Finance", position: "Financial Analyst", salary: 55000 },
    { id: 5, firstName: "David", lastName: "Brown", age: 40, department: "IT", position: "IT Manager", salary: 70000 },
    { id: 6, firstName: "Sarah", lastName: "Jones", age: 27, department: "Sales", position: "Sales Representative", salary: 45000 },
    { id: 7, firstName: "Daniel", lastName: "Martinez", age: 33, department: "Marketing", position: "Marketing Manager", salary: 60000 },
    { id: 8, firstName: "Jessica", lastName: "Garcia", age: 29, department: "Human Resources", position: "HR Specialist", salary: 48000 },
    { id: 9, firstName: "Christopher", lastName: "Rodriguez", age: 31, department: "Finance", position: "Finance Manager", salary: 62000 },
    { id: 10, firstName: "Amanda", lastName: "Lopez", age: 36, department: "IT", position: "Software Engineer", salary: 65000 },
    { id: 11, firstName: "Matthew", lastName: "Hernandez", age: 29, department: "Sales", position: "Sales Representative", salary: 47000 },
    { id: 12, firstName: "Ashley", lastName: "Martinez", age: 34, department: "Marketing", position: "Marketing Specialist", salary: 52000 },
    { id: 13, firstName: "Andrew", lastName: "Gonzalez", age: 27, department: "Human Resources", position: "HR Assistant", salary: 38000 },
    { id: 14, firstName: "Elizabeth", lastName: "Perez", age: 37, department: "Finance", position: "Financial Analyst", salary: 57000 },
    { id: 15, firstName: "Joshua", lastName: "Sanchez", age: 28, department: "IT", position: "Systems Administrator", salary: 58000 },
    { id: 16, firstName: "Samantha", lastName: "Rivera", age: 32, department: "Sales", position: "Sales Manager", salary: 62000 },
    { id: 17, firstName: "Ryan", lastName: "Taylor", age: 31, department: "Marketing", position: "Marketing Manager", salary: 63000 },
    { id: 18, firstName: "Nicole", lastName: "Flores", age: 26, department: "Human Resources", position: "HR Specialist", salary: 45000 },
    { id: 19, firstName: "Kevin", lastName: "Gomez", age: 33, department: "Finance", position: "Finance Manager", salary: 64000 },
    { id: 20, firstName: "Lauren", lastName: "Lee", age: 30, department: "IT", position: "IT Manager", salary: 70000 },
    { id: 21, firstName: "Justin", lastName: "Hill", age: 28, department: "Sales", position: "Sales Representative", salary: 46000 },
    { id: 22, firstName: "Megan", lastName: "Scott", age: 35, department: "Marketing", position: "Marketing Specialist", salary: 53000 },
    { id: 23, firstName: "Brandon", lastName: "Green", age: 29, department: "Human Resources", position: "HR Assistant", salary: 40000 },
    { id: 24, firstName: "Hannah", lastName: "Adams", age: 36, department: "Finance", position: "Financial Analyst", salary: 59000 },
    { id: 25, firstName: "Tyler", lastName: "Baker", age: 27, department: "IT", position: "Software Engineer", salary: 67000 },
    { id: 26, firstName: "Kayla", lastName: "Evans", age: 30, department: "Sales", position: "Sales Manager", salary: 63000 },
    { id: 27, firstName: "Jordan", lastName: "Lewis", age: 32, department: "Marketing", position: "Marketing Manager", salary: 65000 },
    { id: 28, firstName: "Taylor", lastName: "Clark", age: 27, department: "Human Resources", position: "HR Specialist", salary: 47000 },
    { id: 29, firstName: "Cody", lastName: "Allen", age: 34, department: "Finance", position: "Finance Manager", salary: 66000 },
    { id: 30, firstName: "Alexis", lastName: "Wright", age: 31, department: "IT", position: "Systems Administrator", salary: 59000 },
    { id: 31, firstName: "Brandon", lastName: "Nelson", age: 29, department: "Sales", position: "Sales Representative", salary: 48000 },
    { id: 32, firstName: "Rachel", lastName: "King", age: 35, department: "Marketing", position: "Marketing Specialist", salary: 54000 },
    { id: 33, firstName: "Jared", lastName: "Parker", age: 28, department: "Human Resources", position: "HR Assistant", salary: 41000 },
    { id: 34, firstName: "Kelsey", lastName: "Carter", age: 37, department: "Finance", position: "Financial Analyst", salary: 60000 },
    { id: 35, firstName: "Kyle", lastName: "Ward", age: 26, department: "IT", position: "Software Engineer", salary: 68000 },
    { id: 36, firstName: "Alyssa", lastName: "Morris", age: 30, department: "Sales", position: "Sales Manager", salary: 64000 },
    { id: 37, firstName: "Eric", lastName: "Young", age: 32, department: "Marketing", position: "Marketing Manager", salary: 66000 },
    { id: 38, firstName: "Sara", lastName: "Mitchell", age: 27, department: "Human Resources", position: "HR Specialist", salary: 49000 },
    { id: 39, firstName: "Austin", lastName: "Perez", age: 34, department: "Finance", position: "Finance Manager", salary: 67000 },
    { id: 40, firstName: "Courtney", lastName: "Roberts", age: 31, department: "IT", position: "Systems Administrator", salary: 60000 },
    { id: 41, firstName: "Evan", lastName: "Turner", age: 29, department: "Sales", position: "Sales Representative", salary: 49000 },
    { id: 42, firstName: "Lindsey", lastName: "Phillips", age: 35, department: "Marketing", position: "Marketing Specialist", salary: 55000 },
    { id: 43, firstName: "Jeremy", lastName: "Campbell", age: 28, department: "Human Resources", position: "HR Assistant", salary: 42000 },
    { id: 44, firstName: "Allison", lastName: "Ross", age: 37, department: "Finance", position: "Financial Analyst", salary: 61000 },
    { id: 45, firstName: "Nathan", lastName: "Watson", age: 26, department: "IT", position: "Software Engineer", salary: 69000 },
    { id: 46, firstName: "Haley", lastName: "Bailey", age: 30, department: "Sales", position: "Sales Manager", salary: 65000 },
    { id: 47, firstName: "Connor", lastName: "Gonzales", age: 32, department: "Marketing", position: "Marketing Manager", salary: 67000 },
    { id: 48, firstName: "Madison", lastName: "Hill", age: 27, department: "Human Resources", position: "HR Specialist", salary: 51000 },
    { id: 49, firstName: "Bryan", lastName: "Edwards", age: 34, department: "Finance", position: "Finance Manager", salary: 68000 },
    { id: 50, firstName: "Rebecca", lastName: "Long", age: 31, department: "IT", position: "IT Manager", salary: 71000 }
  ];

export default employees