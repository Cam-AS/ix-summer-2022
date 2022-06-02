
const form = document.getElementById('form');
const input = document.getElementById('input');
const button = document.getElementById('button');



form.addEventListener('submit', (e) => {
  e.preventDefault();

  console.log(input.value);

  input.value = '';
});

input.addEventListener('change', (e) => {
  debugger;
  localStorage.setItem('name', e.target.value);
});

button.addEventListener('click', (e) => {
  console.log(e);
});



input.value = localStorage.getItem('name');



// elem.addEventListener('mouseenter', (e) => {
//   console.log(e);
// });
