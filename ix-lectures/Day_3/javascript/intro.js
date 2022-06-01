// Examples from class

// define a variable (Here a variable of type string)
let value = 'hello world';

// console.log() prints to the console of the browser
console.log('Hello! My JS is connected and I am printing to the console');

console.log(value);
var newValue = 0;
value = true;
console.log(value);
value = 99;
console.log(value);
// JS is loosely typed, we can reassign the variable (be careful)

// truthy and falsy check, you can uncomment the line below to compare the difference
// value = false;
// value = 'hello';
if (value) {
  console.log('truthy');
} else {
  console.log('falsy');
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
};

// Notice how the Object looks in the cosole
console.log('Person: ', person);
console.log(person.name);
console.log(person.age);
console.log(person.country);

person.name = 'Cameron';
person.age = 28;
person.country = 'South Africa';
console.log('Person:', person);

// Check if the person Object has the 'name' property
console.log('Check for property', person.hasOwnProperty('name'));

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

function concat(str1, str2) {
  return str1 + str2;
}
console.log(concat('Hello ', 'World'));

console.log('Arrays and Anonymous Functions');
// Don't be confused by anonymous function
// It is just this thing () => {}

const myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(myArr);
const filteredArr = myArr.filter((num) => {
  // console.log(num);
  // Check if even or not (if even modulo returns 0)
  // console.log(num % 2);
  return num % 2 == 0;
});
console.log(filteredArr);

var now = new Date();
console.log('Todays Date: ', now);

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
