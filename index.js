// console.log("Hello World");

// Values and Variable

// var myName = "Aarzoo Islam";
// var myAge = 36;
// console.log(myName, myAge);

// Data Types

// var myname = "Aarzoo";
// console.log(typeof(myname));

// console.log("Sum " + (27 - 4));

// const age = 17;                                               
// if ( age >= 18) {
//     console.log("Your are eligible to vote");
// } else {
//     console.log("You are not eligible to vote");
// }

// const age = 17;

// console.log((age >= 18) ? "eligibe" : "Not eligible");

// const weather = "rainy"

// console.log((weather == "rainy") ? "Not go to school" : "Yes you go to school");

// var area = "circle";

// var PI = 3.142, l = 5, b = 4, r = 3;

// if (area == "circle") {
//     console.log("The area of the circle is : " + PI*r**2)
// } else if ( area == "triangle" ) {
//     console.log("The are of the triangle is : " + (l*b)/2)
// } else if ( area == "rectangle") {
//     console.log("The area of the rectangle is : " + (l * b));
// }

// var area = "circle";

// var PI = 3.142, l = 5, b = 4, r = 3;

// switch (area) {
//     case "circle":
//         console.log("The area of the circle is : " + PI*r**2)
//         break;

//     case "triangle":
//         console.log("The are of the triangle is : " + (l*b)/2)
//         break;

//     case "rectangle":
//         console.log("The area of the rectangle is : " + (l * b))
//         break;

//     default:
//         console.log("Please enter a right value");
//         break;
// }

// var a = 0;

// for (let a = 0; a < 5; a++) {
//     console.log(a);
    
// }

// while (a <= 5) {
//     console.log(a);
//     a++;
// }

// do {
//     console.log(a);
//     a++
// } while (a < 5);

// function sum(a, b) {
//     return a + b;
// }

// var total = sum(5, 6);
// console.log("The sum is = " + total);

// const total = function(a, b) {
//     return a + b;
// }
// const sum = total(5, 6);

// console.log("The sum is = " + sum)
// for(let num = 1; num<= 10; num++) {
//     let tableOf = 12

//     // console.log(tableOf + " * " + num + " = " + tableOf * num);
//     console.log(`${tableOf} * ${num} = ${tableOf*num}`)
// } 

// console.log(sum())

// function sum() {
//     let a = 5; b = 6;
//     let sum = a+b;

//     return `the sum of ${a} and ${b} is ${sum}`
// }

// const sum = () => {
//     let a = 5; b = 6;
//     let sum = a + b;

//     return `the sum of ${a} and ${b} is ${sum}`
// }

// console.log(sum());

// const sum = () => `the sum is ${(a=5)+(b=6)} `

// console.log(sum()) 

let a = ["Aarzoo", "Islam"]
let b = [
    {name: "Aarzoo",
     age: 22,
     role: "software engineer"},

     {name: "Raz",
     age: 22,
     role: "software engineer"}
]

// console.log(a);
console.log(b[0].name);