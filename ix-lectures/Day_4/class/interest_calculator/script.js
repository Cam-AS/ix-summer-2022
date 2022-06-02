
const form = document.getElementById('form');
const loanAmountInput = document.getElementById('loan-amount-input');
const interestInput = document.getElementById('interest-input');
const yearsInput = document.getElementById('years-input');
const output = document.getElementById('output');


form.addEventListener('submit', (e) => {
  e.preventDefault();

  const loan = loanAmountInput.value;
  const interest = interestInput.value;
  const years = yearsInput.value;

  const total = loan * Math.pow((1 + (interest / 100)), years);

  output.innerHTML = '$' + total.toFixed(2);
  output.classList.remove('hide');
});
