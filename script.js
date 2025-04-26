function calculate() {
  let loanAmount = parseFloat(document.getElementById('loan_amount').value);
  let interestRate = parseFloat(document.getElementById('intrest_rate').value);
  let month_to_pay = parseInt(document.getElementById('month_to_pay').value);

  // Validation
  if (isNaN(loanAmount) || isNaN(interestRate) || isNaN(month_to_pay)) {
    alert("Please fill in all the fields correctly!");
    return;
  }

  // Monthly interest rate
  let monthlyInterestRate = (interestRate / 100) / 12;

  // EMI calculation
  let emi = (loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, month_to_pay)) /
            (Math.pow(1 + monthlyInterestRate, month_to_pay) - 1);

  emi = emi.toFixed(2);

  // Total payment and interest
  let totalPayment = (emi * month_to_pay).toFixed(2);
  let totalInterest = (totalPayment - loanAmount).toFixed(2);

  // Output
  document.getElementById('monthlypayment').innerHTML = `Monthly EMI: ₹${emi}`;
  document.getElementById('totalpayment').innerHTML = `Total Payment: ₹${totalPayment}`;
  document.getElementById('totalinterest').innerHTML = `Total Interest: ₹${totalInterest}`;
}

// Attach calculate to button
document.getElementById('submit').addEventListener('click', calculate);
