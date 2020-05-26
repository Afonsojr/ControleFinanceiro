const transacaoUl = document.querySelector("#transactions");
const incomeDisplay = document.querySelector("#money-plus");
const expenseDisplay = document.querySelector("#money-minus");
const balanceDisplay = document.querySelector("#balance");
const form = document.querySelector("#form");
const inputTransactionName = document.querySelector("#text");
const inputTransactionAmount = document.querySelector("#amount");

// Dummy data!!
dummy = [
  { id: 1, name: "Bolo", amount: -20 },
  { id: 2, name: "Salário", amount: 2000 },
  { id: 3, name: "Sorvete", amount: -10 },
  { id: 4, name: "Freela", amount: 250 },
];

// Add transacao
const addTransacao = (transacao) => {
  const operador = transacao.amount < 0 ? "-" : "+";
  const CSSCLASS = transacao.amount < 0 ? "minus" : "plus";
  const valor = Math.abs(transacao.amount);

  const li = document.createElement("li");
  li.classList.add(CSSCLASS);
  li.innerHTML = `
  ${transacao.name}
    <span>${operador} R$ ${valor}</span>
    <button class="delete-btn">x</button>
  `;
  transacaoUl.append(li);
};

// Atualiza saldo
const atulizarSaldo = () => {
  const saldoTransacao = dummy.map((transacao) => {
    return transacao.amount;
  });
  // console.log(saldoTransacao);
  // const saldoNegativo = dummy.reduce((item) => {
  //   console.log(item > 0);
  // });
};

// form addEventListener
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (
    inputTransactionName.value.trim() === "" ||
    inputTransactionAmount.value.trim() === ""
  ) {
    // TODO remove alert and put highligth on input
    alert("os dados precisam ser preenchidos");
  }
});

const updateBalanceValues = () => {
  const transactionAmounts = dummy.map((transaction) => transaction.amount);

  const total = transactionAmounts
    .reduce((acc, val) => acc + val, 0)
    .toFixed(2);

  const income = transactionAmounts
    .filter((val) => val > 0)
    .reduce((acc, val) => acc + val, 0)
    .toFixed(2);

  const expense = Math.abs(
    transactionAmounts
      .filter((val) => val < 0)
      .reduce((acc, val) => acc + val, 0)
      .toFixed(2)
  );

  balanceDisplay.textContent = `R$ ${total}`;
  incomeDisplay.textContent = `R$ ${income}`;
  expenseDisplay.textContent = `R$ ${expense}`;
};

const init = () => {
  dummy.forEach(addTransacao);
  atulizarSaldo();
  updateBalanceValues();
};

init();
