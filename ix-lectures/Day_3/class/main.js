// console.log prints to the console (in chrome)
console.log('We are connected!');

// Variables

// LET can be reassigned
let a = 0;
// CONST can't be reassigned
const b = 1;
// VAR can be reassigned within it's scope
// We generally don't use var, we stick to let and const
var c = 2;

let value = 'Hello World!';
console.log(value);

// Reassign variable
value = 'New World';
console.log(value);

const newValue = 'Hello';
console.log(newValue);

// newValue = 'World';
// console.log(newValue);
// main.js:24 Uncaught TypeError: Assignment to constant variable.

// Data Types in JavaScript

// Primitive
// Stored in the location on the stack

// string
// number
// boolean
// null (intentionally empty value)
// undefined (variable unassigned)

// Reference
// Dynamically allocated memory
// A pointer to a location in memory

// arrays
// objects
// literals
// functions
// anything else

// JavaScript is loosely typed
// ie: we can reassign variables, so be careful

let myName = 'Cameron';
console.log('Name: ', myName);
myName = 29;
console.log('Name: ', myName);

// string variable became a number

// String Methods and Concatenation

// const firstName = 'Cameron'
// const lastName = 'Kirkpatrick'
// const age = 27
// const str = 'Hello my name is Cam'
// const tags = 'software, programming'

// let val

// val = firstName + lastName

// // Concatenation
// val = firstName + ' ' + lastName

// // Appending
// val = 'John '
// val += 'Doe'

// val = 'Hello, my name is ' + firstName + ' and I am ' + age

// // Escaping
// val = "That's awesome, I can't wait"
// val = 'That\'s awesome, I can\'t wait'

// // Length
// val = firstName.length

// // concat
// val = firstName.concat(' ', lastName)

// // to upper/lower case
// val = firstName.toUpperCase()
// val = firstName.toLowerCase()

// val = firstName[4]

// // Index of a value or char
// val = firstName.indexOf('e')
// val = firstName.lastIndexOf('m')

// // charAt()
// val = firstName.charAt('2')

// // Last character of a string
// val = firstName.charAt(firstName.length -1)

// // get substrings
// val = firstName.substring(0,3)

// // slice
// val = firstName.slice(0,3)
// val = firstName.slice(-3)

// // split()
// val = str.split(' ')
// val = tags.split(',')

// // replace
// val = str.replace('Cam', 'Cameron')

// // includes()
// val = str.includes('my')
// val = str.includes('mye')

// Template Literals;

const name = 'Cam';
const age = 29;
const job = 'Software Engineer';
const city = 'Johannesburg';
let html;

// With template strings (es6)
html = `
<ul>
    <li>Name: ${name}</li>
    <li>Age: ${age}</li>
    <li>Job: ${job}</li>
    <li>City: ${city}</li>
    <li>${2 + 2}</li>
    <li>${age > 25 ? 'Over 25' : 'Under 30'}</li>
</ul>
`;

document.body.innerHTML = html;

// // Math Object

// // Math is an object which means it has properties and methods
// // Properties are like an attribute and methods are just a function inside an object
// val = Math.PI
// // Eulers number
val = Math.E;
console.log(val);
// val = Math.round(2.4)
// val = Math.ceil(2.4)
// val = Math.floor(2.8)
// val = Math.sqrt(64)
// val = Math.abs(-78)
// val = Math.pow(8, 2)
// val = Math.min(2,-43,5,4,64,756,3)
// val = Math.max(2,43,-5,4,64,756,3)
// val = Math.random()
// val = Math.floor(Math.random()*20 + 1)

// truthy and falsy check, you can uncomment the line below to compare the difference
let item = false;
item = 'hello';
item = null;
item = 0;
item = 1;
if (item) {
  console.log('truthy');
} else {
  console.log('falsy');
}

// IF STATEMENTS AND COMPARISON OPERATORS

// if(something){
//     do something
// } else {
//     do something else
// }

// const id = 100;

// Equal to
// if(id == 100){
//     console.log('Correct!');
// } else {
//     console.log('Incorrect!');
// }

// // Not equal to
// if(id != 101){
//     console.log('Correct!');
// } else {
//     console.log('Incorrect!');
// }

// // Equal to value $ type
// if(id === 100){
//     console.log('Correct!');
// } else {
//     console.log('Incorrect!');
// }

// if(id !== 100){
//     console.log('Correct!');
// } else {
//     console.log('Incorrect!');
// }

// Test if undefined
// if(typeof id !== 'undefined'){
//     console.log(`The ID is ${id}`);
// } else {
//     console.log('No ID');
// }

// Greater or less than
// if(id > 200){
//     console.log('Correct!');
// } else {
//     console.log('Incorrect!');
// }

// IF ELSE
// const color = 'yellow';

// if(color === 'red'){
//     console.log('Color is Red');
// } else if(color === 'blue'){
//     console.log('Color is blue');
// } else {
//     console.log('Color is not red or blue');
// }

// LOGICAL OPERATORS

// const name = 'Steve';
// const age = 76;

// // AND &&
// if(age > 0 && age < 12){
//     console.log(`${name} is a child`);
// } else if(age >= 13 && age <= 19){
//     console.log(`${name} is a teenager`);
// } else {
//     console.log(`${name} is an adult`);
// }

// // OR ||
// if(age < 16 || age > 65){
//     console.log(`${name} can not run in the race`);
// } else {
//     console.log(`${name} is registered for the race`);
// }

// // TERNIARY OPERATOR
// console.log(id === 100 ? 'Correct!' : 'Incorrect!');

// // WITHOUT BRACES

// if (id === 100) console.log('Correct');
// else console.log('Incorrect');

// SWITCHES
// When you have a lot of different cases

const color = 'blue';

switch (color) {
  case 'red':
    console.log('Color is red');
    break;
  case 'blue':
    console.log('Color is blue');
    break;
  default:
    console.log('Color is not red or blue');
    break;
}

// Arrays
let array = [];
array.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(array);
console.log(array.length);
console.log(array[0]);
console.log(array.pop());
console.log(array);

array.push('what a string?');
console.log(array);
// As seen above you must be careful because we can add different types to the array
array[0] = 'New value';
console.log(array);

var number = 8.2;
console.log('Number is: ', number);
number = parseInt(8.2);
console.log('Number is: ', number);
number = parseFloat(8.2);
console.log('Number is: ', number);

// Objects
// A collection of properties or collection of primitive types
// made up of values and variables

let person = {
  name: 'Sam',
  age: 25,
  country: 'Portugal',
  getAge: function () {
    return this.age;
  },
};

// Notice how the Object looks in the console
console.log('Person: ', person);
console.log(person.name);
console.log(person.age);
console.log(person.country);
console.log(person.getAge());

console.log('Object Keys');
console.log(Object.keys(person));

person.name = 'Cameron';
person.age = 28;
person.country = 'South Africa';
console.log('Person:', person);

// Check if the person Object has the 'name' property
console.log('Check for property', person.hasOwnProperty('name'));

// Looping

// for loop
for (let i = 0; i < 10; i++) {
  console.log(`Hello index number ${i}`);
}
// while loop
value = 10;
while (value < 20) {
  console.log(`We are at number ${value}`);
  value += 1;
}

// Output sheep counter

// Remember index starts at 0 ie: we must add 1 to the index
// You can also go from 1 to 6 (There are a few ways to do this)

console.log('For Loop');
for (let i = 0; i < 5; i++) {
  console.log('Sheep Number ' + (i + 1));
}

console.log('While Loop');
let num = 1;
while (num < 6) {
  console.log('Sheep Number ' + num);
  num += 1;
}

console.log('Do While Loop');
var i = 1;
do {
  console.log('Sheep Number ' + i);
  i++;
} while (i < 6);

// Functions

// A block of code wrtten for a specific task
// Call your function to execute it
// Can take in parameters
// Can also return data
// Makes code reusable
console.log('Functions');

// FUNCTION DECLARATION

function greet(firstName = 'John', lastName = 'Doe') {
  // if(typeof firstName === 'undefined'){firstName = 'John'}
  // if(typeof lastName === 'undefined'){lastName = 'Doe'}
  // console.log('Hello');
  return 'Hello ' + firstName + ' ' + lastName;
}

console.log(greet());
console.log(greet('Steve'));

function getColor(color) {
  switch (color) {
    case 'red':
      console.log('Color is red');
      break;
    case 'blue':
      console.log('Color is blue');
      break;
    default:
      console.log('Color is not red or blue');
      break;
  }
}

getColor();
getColor(color);
getColor('red');

function concat(str1, str2) {
  return str1 + str2;
}
console.log(concat('Hello ', 'World'));

console.log('Arrays and Anonymous Functions');

const myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(myArr);
// Filter all odd numbers out
const filteredArr = myArr.filter((num) => {
  // console.log(num);
  // Check if even or not (if even modulo returns 0)
  // console.log(num % 2);
  return num % 2 == 0;
});
console.log(filteredArr);

function printDate() {
  let now = new Date();
  day = now.getDay();
  console.log(now.getUTCDate());
  // getDay gives the day of the week ie: 3 = Wednesday
  month = now.getMonth();
  // getMonth gives the month but index starts at 0
  year = now.getFullYear();
  console.log('Day: ', day);
  console.log('Month: ', month);
  console.log('Year: ', year);
  console.log(year + '/' + month + '/' + day);
  console.log('Full Date: ', now);

  // Notice the day and month return differently because of how JS works with dates
  // To get todays date exactly we have to convert from the response

  console.log(now.getUTCDate() + '/' + (month + 1) + '/' + year);
}

printDate();

function isPerfectSquare(val) {
  return Math.sqrt(val) % 1 == 0;
}

console.log(isPerfectSquare(1));
console.log(isPerfectSquare(2));
console.log(isPerfectSquare(3));
console.log(isPerfectSquare(4));

for (let i = 0; i < 100; i++) {
  console.log(i);
  console.log(isPerfectSquare(i));
}
