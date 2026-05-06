let display = document.getElementById("display");

function appendValue(value) {
  if (display.value === "0") display.value = "";
  display.value += value;
}

function clearDisplay() {
  display.value = "0";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
  if (display.value === "") display.value = "0";
}

function calculate() {
  let exp = display.value;

  let num = "";
  let result = 0;
  let operator = "+";

  for (let i = 0; i < exp.length; i++) {
    let ch = exp[i];

    if ("0123456789.".includes(ch)) {
      num += ch;
    }

    if ("+-*/".includes(ch) || i === exp.length - 1) {
      let current = Number(num);

      if (operator === "+") result += current;
      else if (operator === "-") result -= current;
      else if (operator === "*") result *= current;
      else if (operator === "/") result /= current;

      operator = ch;
      num = "";
    }
  }

  display.value = result;
}