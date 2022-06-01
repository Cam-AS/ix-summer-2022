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

// remember index starts at 0 ie: we must add 1 to the index
// You can also go from 1 to 6 (There are a few ways to do this)
for (let i = 0; i < 5; i++) {
  console.log('Sheep Number ' + (i + 1));
}
