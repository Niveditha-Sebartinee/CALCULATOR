let display = document.getElementById("display");

function appendValue(value) {
  if (display.value === "0") {
    display.value = "";
  }
  display.value += value;
}

function clearDisplay() {
  display.value = "0";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
  if (display.value === "") {
    display.value = "0";
  }
}

function calculate() {
  let exp = display.value;

  let num1 = "";
  let num2 = "";
  let op = "";

  for (let i = 0; i < exp.length; i++) {
    if ("+-*/".includes(exp[i])) {
      op = exp[i];
      num1 = exp.slice(0, i);
      num2 = exp.slice(i + 1);
      break;
    }
  
  }
  let a = Number(num1);
  let b = Number(num2);
  let result = 0;

  if (op === "+") result = a + b;
  if (op === "-") result = a - b;
  if (op === "*") result = a * b;
  if (op === "/") result = b !== 0 ? a / b : "Error";

  display.value = result;
}