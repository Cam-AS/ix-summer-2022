// Test everything is connected correctly
console.log('Connected!');

// Examining the DOM

let dom;
dom = document;
console.log(dom);
console.log(dom.all);
console.log(dom.all.length);
console.log(dom.all[9]);
console.log(dom.forms);
console.log(dom.forms[0].id);

// document object methods allow us to pull things from the dom
// in vanilla JS we have single element and multiple element
// single selectors grab one element by id or class and stores one thing, grabs first one
// multiple returns all elements with that class and return and html collection
// or node list depending on selector

// An HTMLCollection is a collection of document elements.
// A NodeList is a collection of document nodes
//  (element nodes, attribute nodes, and text nodes).
// HTMLCollection items can be accessed by their name, id, or index number.
// NodeList items can only be accessed by their index number.

// Single element selectors
// Dom Selectors for single elements

// getElementById
let formGroup = dom.getElementById('class-example');
console.log(formGroup);

// Get stuff from the element
console.log(formGroup.id);
console.log(formGroup.className);

let table = dom.getElementById('table');

let cell = dom.getElementById('marks-cell');
console.log(cell);
cell.innerHTML = 'Cam';

// Multiple element selectors

// selectors used for more then one element
// html collection or node list
// converted to arrays

const tables = document.getElementsByClassName('table');
console.log(tables);

// Get table from array
console.log(tables[0]);
console.log(tables[1]);

// How many tables
console.log(tables.length);

// Get element by Tag name
const tableBodies = document.getElementsByTagName('tbody');
console.log(tableBodies);

const table2 = document.getElementById('table2');

// QuerySelector

console.log('Query Selector');
console.log('By ID');
console.log('Table 1');
console.log(document.querySelector('#table'));
console.log('Table 2');
console.log(document.querySelector('#table2'));

console.log('By Class');
console.log(document.querySelector('.card'));
console.log('By Element');
console.log(document.querySelector('h1'));

// Change Table 2 row 1 Last name
const tableTwo = document.querySelector('#table2');
console.log(tableTwo);
const marksRow = tableTwo.querySelector('tr td:nth-child(3)');
console.log(marksRow);
marksRow.innerHTML = 'Kirk';

// Creating elements & adding attributes

const body = document.body;
const elem = document.createElement('div');
elem.classList.add('custom-div');
elem.innerHTML = 'This was created from JavaScript';
body.appendChild(elem);

// Event listeners & the event object

const button = document.getElementById('button');
console.log(button);

// Add an event listener and look at the event object
document.querySelector('#button').addEventListener('click', onClick);
console.log('Check out the event object');
function onClick(e) {
  console.log('Hey there');

  // lets check the event object
  let val;

  val = e;
  console.log(val);

  // Event target element
  val = e.target;
  console.log(val);
  val = e.target.id;
  console.log(val);
  val = e.target.className;
  console.log(val);

  // As collection
  val = e.target.classList;
  console.log(val);

  e.target.innerText = 'Hello';

  // Event Type
  val = e.type;
  console.log(val);

  // Co-ordinates relative to window
  val = e.clientY;
  console.log(val);
  val = e.clientX;
  console.log(val);

  // Co-ordinates relative to element itself
  val = e.offsetY;
  console.log(val);
  val = e.offsetX;
  console.log(val);
}

// Add an event listener to button
button.addEventListener('mouseenter', (e) => {
  console.log(e);
});

// You can add event listeners here or in the HTML like the button above
button.addEventListener('click', (e) => {
  console.log('Hey the button was clicked!');
});

button.addEventListener('mouseleave', (e) => {
  console.log('Hey we left the button!');
});

function connected() {
  console.log('Connected!');
}

function showAlert() {
  const alert = document.createElement('div');
  alert.classList.add('alert');
  alert.classList.add('alert-primary');
  alert.innerHTML = 'This is my alert';
  body.append(alert);
}

function formSubmitted(e) {
  e.preventDefault();
  console.log('Form Submitted!');
  console.log(e);

  const input = document.getElementById('exampleInput');
  console.log(input.value);
  input.value = '';
}

// LOCAL STORAGE

// SET LOCAL STORAGE ITEM

localStorage.setItem('name', 'Cameron');
localStorage.setItem('age', '30');

// remove from storage
localStorage.removeItem('name');

// get from local storage
const name = localStorage.getItem('name');
const age = localStorage.getItem('age');
console.log(name, age);

// // clear everything
localStorage.clear();
