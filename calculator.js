function add(a, b) {
  return a + b
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(operator, a, b) {
  switch (operator) {
    case "add":
      return add(a, b);
    case "substract":
      return subtract(a, b);
    case "multiply":
      return multiply(a, b);
    case "divide":
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

buttons = document.querySelectorAll("button");
buttons.forEach(button => button.addEventListener("click", () => {
  if (button.id === "clear") {
    console.log("Call clear function");
  } else if (button.id === "equal") {
    console.log("Call compute function");
  } else {
    writeDisplay(button.value);
  }
}))

// Testing
module.exports = {
  add,
  subtract,
  multiply,
  divide
};