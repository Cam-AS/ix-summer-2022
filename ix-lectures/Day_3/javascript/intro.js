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
