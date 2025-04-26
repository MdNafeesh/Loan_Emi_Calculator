function calculate() {
  let loanAmount = document.getElementById('loan_amount').value;
  let interestRate = document.getElementById('intrest_rate').value;
  let month_to_pay = document.getElementById('month_to_pay').value;

  let interest = (loanAmount * (interestRate * 0.01)) / month_to_pay;
  let monthlypayment = (loanAmount / month_to_pay + interest).toFixed(2);

  document.getElementById('monthlypayment').innerHTML = `Monthly Payment: ₹${monthlypayment}`;
}

// Attach calculate function to submit button click
document.getElementById('submit').addEventListener('click', calculate);
