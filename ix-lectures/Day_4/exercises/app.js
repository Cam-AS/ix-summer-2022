// Get all our elements

const form = document.getElementById('form');
const amountInput = document.getElementById('amount');
const interestInput = document.getElementById('interest');
const yearsInput = document.getElementById('years');
const output = document.getElementById('output');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  let loan = amountInput.value;
  let interest = interestInput.value;
  let years = yearsInput.value;

  calculateInterest(loan, interest, years);
});

function calculateInterest(loan, interest, years) {
  answer = loan * Math.pow(1 + interest / 100, years);
  output.innerHTML = '$' + answer;
  output.classList.remove('hide');
  console.log(answer);
}

const form2 = document.getElementById('form2');
const number = document.getElementById('number');
const guess = document.getElementById('guess');

const randomNumber = Math;

form2.addEventListener('submit', (e) => {
  e.preventDefault();

  // Check for our number value
  console.log(number.value);

  // pass the value entered in the input to our function
  checkIfCorrect(number.value);
});

function checkIfCorrect(number) {
  const random = Math.ceil(Math.random() * 10);

  console.log('Random: ', random);
  console.log('Guess: ', number);

  guess.classList.remove('hide');

  // Note, a === checks for type but here we are comparing a string and a number so we can just use a == for the check
  if (number == random) {
    guess.innerHTML = 'Hey you got it!';
  } else {
    guess.innerHTML = 'Nope, try again lol';
  }
}
