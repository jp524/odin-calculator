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
  const OPERATOR_OPTIONS = ["+", "-", "*", "/"];
  const l = input.length;
  let a = "";
  let b = "";
  let operator = "";
  for (let i = 0; i < l; i++) {
    if (OPERATOR_OPTIONS.includes(input[i])) {
      a = input.slice(0, i);
      operator = input.slice(i, i + 1);
      b = input.slice(i + 1, l);
      return toCompute = { a, b, operator };
    };
  };
}

function compute() {
  let {a, b, operator} = splitInput(input);
  display.textContent = operate(operator, a, b);
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