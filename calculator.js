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
let error = false;
display = document.querySelector(".display");
errorMessage = document.querySelector(".errorMessage");
dotButton = document.querySelector("#dot");

function writeDisplay(value) {
  input += value;
  display.textContent = input;
  if (input.includes(".")) {
    dotButton.disabled = true;
  };
}

function resetState() {
  input = "";
  dotButton.disabled = false;
  error = false;
}

function clear() {
  resetState();
  display.textContent = input;
}

function backspace() {
  input = input.slice(0, input.length - 1);
  display.textContent = input;
  if (!input.includes(".")) {
    dotButton.disabled = false;
  };
}

function splitInput(input) {
  const OPERATOR_OPTIONS = /\+|-|\*|\//g;
  const numbers = input.split(OPERATOR_OPTIONS);
  const operators = input.match(OPERATOR_OPTIONS);
  return { numbers, operators };
}

function roundToFiveDecimals(total) {
  return Math.round(total * 10 ** 5) / 10 ** 5;
}

function checkErrors(numbers, operators) {
  if (numbers.includes("") || !operators) {
    error = true;
    errorMessage.textContent = "Please enter a number followed by an operator and another number.";
    resetState();
  };
}

function compute() {
  let { numbers, operators } = splitInput(input);
  let total = "";

  checkErrors(numbers, operators);

  if (!error) {
    for (let i = 0; i < operators.length; i++) {
      if (i === 0) {
        total = operate(operators[0], numbers[0], numbers[1]);
      } else {
        total = operate(operators[i], total, numbers[i + 1]);
      }
    };
    display.textContent = roundToFiveDecimals(total);
    resetState();
  };
}

buttons = document.querySelectorAll("button");
buttons.forEach(button => button.addEventListener("click", () => {
  if (button.id === "clear") {
    clear();
  } else if (button.id === "backspace") {
    backspace();
  } else if (button.id === "equal") {
    compute();
  } else {
    writeDisplay(button.value);
    errorMessage.textContent = "";
  };
}));

// Testing
module.exports = {
  add,
  subtract,
  multiply,
  divide
};