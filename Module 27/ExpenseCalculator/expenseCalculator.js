const expenseAmount = document.getElementById("expense-amount");
const expenseField = document.querySelector("#expense-field");
const amountField = document.querySelector("#amount-field");
const expenseInsertBtn = document.querySelector("#expense-insert-btn");
const rowContainer = document.querySelector("#row-container");


expenseInsertBtn.addEventListener("click", (even) => {
  const expense = expenseField.value;
  const amount = Number(amountField.value);

  const rowText = `
  <div class="flex justify-between">
  <p>${expense}</p>
  <p>${amount}</p>
  </div>
  `;

  let totalExpenses = Number(expenseAmount.innerText);
  totalExpenses += amount;
  expenseAmount.innerHTML = totalExpenses;

  rowContainer.innerHTML += rowText;

  expenseField.value = "";
  amountField.value = "";
});
