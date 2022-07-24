function add(a, b) {
  return +a + +b
}

function subtract(a, b) {
  return +a - +b;
}

function multiply(a, b) {
  return +a * +b;
}

function divide(a, b) {
  return +a / +b;
}

function operate(operator, a, b) {
  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);
    default:
      console.log("ERROR");
  }
}

let input = "";
display = document.querySelector(".display");
function writeDisplay(value) {
  input += value;
  display.textContent = input;
}

function clear() {
  input = "";
  display.textContent = input;
}

function splitInput(input) {
  const OPERATOR_OPTIONS = /\+|-|\*|\//g;
  const numbers = input.split(OPERATOR_OPTIONS);
  const operators = input.match(OPERATOR_OPTIONS);
  return { numbers, operators };
}

function compute() {
  let { numbers, operators } = splitInput(input);
  let total = 0;

  for (let i = 0; i < operators.length; i++) {
    if (i === 0) {
      total = operate(operators[0], numbers[0], numbers[1]);
    } else {
      total = operate(operators[i], total, numbers[i + 1]);
    }
  }
  display.textContent = total;
  input = "";
  // Add cases for error handling: not enough numbers or operators, too many operators, too many dots, etc.
}

buttons = document.querySelectorAll("button");
buttons.forEach(button => button.addEventListener("click", () => {
  if (button.id === "clear") {
    clear();
  } else if (button.id === "equal") {
    compute();
  } else {
    writeDisplay(button.value);
  };
}));

// Testing
module.exports = {
  add,
  subtract,
  multiply,
  divide
};