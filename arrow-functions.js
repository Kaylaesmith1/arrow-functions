/**
 * To run this file in Gitpod, use the 
 * command 'node arrow-functions.js' in the terminal
 */

//VANILLA JAVASCRIPT FUNCTION
// function twoNumbers(num1, num2) {
//     return (num1 + num2)

// }

// let sum = twoNumbers(3, 5);
// console.log(sum);

//ARROW FUNCTION W PARAMETERS
// const twoNumbers = (num1, num2) => {
//     return (num1 + num2);

// }
// let sum = twoNumbers(4, 11);
// console.log(sum);

//SINGLE LINE ARROW FUNCTION W PARAMETERS
// const twoNumbers = (num1, num2) => num1 + num2;
// let sum = twoNumbers(10,2);
// console.log(sum);

// IMPLICIT RETURNS
// const saySomething = message => console.log(message);
// saySomething('Hi!');

// const sayHello = () => console.log('hello');
// sayHello();

//RETURNING TO MULITPLE LINES

// const returnMultipleLines = () => (
//     `<p> 
//     This is multi line code
//     </p>`
// )
// console.log(returnMultipleLines());



// SPREAD OPERATORS, JS

// NO SPREAD OPERATOR
// let arr1 = [1,2,3];
// let arr2 = arr1;
// arr2.push(4); //this command will add '4' to both arr1 and arr2

// console.log('First array:', arr1);
// console.log('Second array:', arr2);

// COPY AN ARRAY
// let arr3 = [4,5,6];
// let arr4 = [...arr3]; //this will ONLY add new information to arr4, keeping arr3 original
// arr4.push(7,8);

// console.log('Third array:', arr3);
// console.log('Fourth array:', arr4);

// COPY AN OBJECT
// let obj1 = {a:1, b:2, c:3};
// let obj2 = {...obj1, d:4, e:5};
// let obj3 = {...obj1, b:5}; //can overwrite values w/o changing obj1

// console.log('First object:', obj1);
// console.log('Second object:', obj2);
// console.log('Third object:', obj3);

// COPY ONLY PART OF AN ARRAY/OBJECT
// let arr5 = [...arr1, {...obj1}, ...arr3, 'x', 'y', 'z'];

// console.log(arr5);


// REST PARAMETER SYNTAX
// REGULAR FUNCTION CALL
// const sumAll = (a, b, c) => a + b + c;
// let sum = sumAll(1, 2, 3);
// console.log('Sum:', sum);

// EXTRA ARGUMENTS ARE IGNORED
// let sum2 = sumAll(1, 2, 3, 4, 5, 6); //last 3 numbers ignored 
// console.log('Sum2', sum2);

// FUNCTION USING ... rest; puts extra parameters (4, 5, 6) into new parameter (an array w/in a function) 
// const sumRest = (a, b, c, ...rest) => {
//     let sum = a + b + c;
//     for(let i of rest) {
//         sum += i;
//     }
//     return sum;
// }
// let sum3 = sumRest(1, 2, 3, 4, 5, 6);
// console.log('Sum3', sum3);

// DESTRUCTURING
// Destructuring arrays
// let ages = [30, 26, 27]
// let [john, mary, joe] = ages;
// console.log(john, mary, joe);

// // Destruc objects
// let jobs = {
//     mike: "designer",
//     jill: "developer",
//     alicia: "accountant",
// };
// let {mike, jill, alicia} = jobs;
// console.log(mike, jill, alicia);

// // Destruc subsets
// let languages = ["english", "french", "spanish", "german", "japanese"];
// let [johnNative, johnSecondary] = languages;
// console.log(johnNative, johnSecondary); //This will only show englihs and french, will skip the rest of the languages

// let [, , maryNative, marySecondary] = languages; //Commas will skip the value
// console.log(maryNative, marySecondary); //This will show spanish and german bc we skipped the first two languages before

// let languages2 = {
//     firstLang: "english",
//     secondLang: "french",
//     thirdLang: "german",
//     fourthLang: "japanese",
// };
// let {firstLang, thirdLang} = languages2;
// console.log(firstLang, thirdLang); //This will print out english and german

// // Using rest parameter syntax
// let fruits = ["apple", "orange", "banana", "peach", "cherry"];
// let [favorite, secondFave, ...others] = fruits;
// console.log(favorite); //will show apple
// console.log(secondFave); //will show orange
// console.log(others); //will show array of the rest

// let faveFoods = {
//     brian: "pizza",
//     anna: "pasta",
//     sarah: "veggie",
//     andrea: "steak",
// };

// let {brian, anna, ...rest} = faveFoods
// console.log(brian); //shows pizza
// console.log(rest); //shows everyone else

// Map() METHOD
//USING A FOR LOOP
// let nums = [1, 2, 3, 4, 5];
// let results = [];
// for(let num of nums) {
//     results.push(num * 2);
// }
// console.log(results);

//USING MAP()
// const multTwo = function (num) {
// return num * 2;
// } //in reality, dont need to write function outside of map method

// const mapResults = nums.map(multTwo);
// console.log(mapResults);

// //SIMPLIFIED W MAP()
// const simplified = nums.map(function(num) {return num * 2}); //just move whole function INSIDE map(); don't need to name function
// console.log(simplified);

// //SIMPLIFIED MAP() W ARROW
// const arrow = nums.map(num => num * 2);
// console.log(arrow);

// WITH OBJECTS
// const students = [
//     {
//         id: 1,
//         name: 'Mark',
//         profession: 'developer',
//         skill: 'JavaScript',
//     },
//     {
//         id: 2,
//         name: 'Ariel',
//         profession: 'Developer',
//         skill: 'HTML',
//     },
//     {   id: 3,
//         name: 'Jason',
//         profession: 'Designer',
//         skill: 'CSS',
//     },    
// ];

// const studentsWithIds = students.map(student => [student.name, student.id]);
// console.log(studentsWithIds);

//FILTER METHOD - filter out elements you don't need
//Simple filtering
// const people = [
//     {
//         name: "Mike",
//         age: 23,
//     },
//     {
//         name: "Lianna",
//         age: 16,   
//     },
//     {
//         name: "Paul",
//         age: 18,
//     },
// ]; //want to create array w only people over 21

// const oldEnough = people.filter(person => person.age >= 21);
// const paul = people.filter(person => person.name[0]==='P');
// console.log(paul);
// console.log(oldEnough);

//Complex Filtering
// const students = [
//     {
//         id: 1,
//         name: "Mark",
//         profession: "Developer",
//         skills: [
//             {name: "javascript", yrsExperience: 1},
//             {name: "html", yrsExperience: 5},
//             {name: "css", yrsExperience: 3},
//         ]
//     },
//     {
//         id: 2,
//         name: "Ariel",
//         profession: "Developer",
//         skills: [
//             {name: "javascript", yrsExperience: 0},
//             {name: "html", yrsExperience: 4},
//             {name: "css", yrsExperience: 2},
//         ]
//     },
//     {
//         id: 3,
//         name: "Jason",
//         profession: "Designer",
//         skills: [
//             {name: "javascript", yrsExperience: 1},
//             {name: "html", yrsExperience: 1},
//             {name: "css", yrsExperience: 5},
//         ]
//     },
// ];

// const has5yearsExp = skill => skill.yrsEperience >= 5;
// const hasStrongSkills = student => student.skills.filter(has5yearsExp).length > 0;
// const candidates = students.filter(student => {
//     let strongSkills = student.skills.filter(skill => skill.yrsExperience >= 5);
//     return strongSkills.length > 0;
// });

// console.log(candidates);

//REDUCING
//Summing an array of numbers:
// const nums = [0, 1, 2, 3, 4];
// let sum = nums.reduce((acc, curr) => acc + curr);


const teamMembers = [
    {
        name: "Andrew",
        profession: "Developer",
        yrsExperience: 5,
    },
    {
        name: "Ariel",
        profession: "Developer",
        yrsExperience: 7,
    },
    {
        name: "Michael",
        profession: "Designer",
        yrsExperience: 1,
    },
    {
        name: "Kelly",
        profession: "Manager",
        yrsExperience: 3,
    },
];

//Totaling a specific object property - want to total all experience of team as a whole
// let totalExperience = teamMembers.reduce((acc, curr) => acc + curr.yrsExperience, 0); //have to have 0 to specify where to start so doesn't start w the first entire object (andrew, developer, etc)
// console.log(totalExperience);

//Grouping by a property (profession), and totaling number of years experience by profession
// let expProf = teamMembers.reduce((acc, curr) => {
//     let key = curr.profession;
//     if (!acc[key]) {
//     acc[key] = curr.yrsExperience;
//     } else {
//     acc[key] += curr.yrsExperience;
// }
// return acc;
// }, {});

// console.log(expProf);
