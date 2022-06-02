function buttonClicked() {
  console.log('We are connected!');
}

// Checking out the Document
console.log(document);

const table1 = document.getElementById('table1');

console.log(table1);
table1.style.border = '1px solid black';
table1.classList.add('text-center');

// Multiple element selectors

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

table2.setAttribute('tite', 'hello');
console.log(table2.getAttribute('class'));
console.log(table2.attributes);

const button = document.getElementById('button');
console.log(button);

// Add an event listener to button
button.addEventListener('mouseenter', (e) => {
  console.log(e);
});

// You can add event listeners here or in the HTML like the button above
button.addEventListener('click', (e) => {
  console.log('Hey the button was clicked!');
});

const form = document.getElementById('form');
const input = document.getElementById('input');
const btn = document.getElementById('btn');

form.addEventListener('submit', (e) => {
  // Prevent page reload
  e.preventDefault();

  // Alternatively
  // e.stopPropagation();
  console.log('FORM SUBMITTED');
});

// Event bubbling
// If we click on the form we get 'Form click'
// If we click on the button we get both form and button click

btn.addEventListener('click', (e) => {
  e.preventDefault();

  // Stop the propogation of the event with the below
  e.stopPropagation();

  // Get values from input
  console.log(input.value);
  input.value = '';
  console.log('Button clicked here');
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log('Form clicked here');
});

// Local Storage
// Store some key value pairs

input.addEventListener('change', (e) => {
  // You can fetch the value in 2 ways

  // 1 from the event target
  // e.target.value

  // 2 from teh input reference we have
  const value = input.value;
  localStorage.setItem('name', value);
});

// Get value form local storage and set the value of the input field
input.value = localStorage.getItem('name');
