let button;
let input = 0;
let output = 0;
let a = 0;
let b = 0;
let operator = "";
let result;

const display = document.querySelector('.display')
display.textContent = 0;

const add = (a,b) => result = a + b;
const subtract = (a,b) => result = a - b;
const multiply = (a,b) => result = a * b;
const divide = (a,b) => result = a / b;
const operate = (operator,a,b) => {
  if (operator == "+") {
    add(a,b);
  } else if (operator == "-") {
    subtract(a,b);
  } else if (operator == "*") {
    multiply(a,b);
  } else if (operator == "/") {
    divide(a,b);
  };
  return result;
};

const buttons = document.querySelectorAll('.button');

buttons.forEach(button => button.onclick = function() {
  input = button.id
  // calculator();
  checkInput();
});

window.addEventListener('keydown', function(e) {
  input =  e.key;
  // calculator();
  checkInput();
});

function checkInput () {
  console.log(input)

  if (isNumber()) {
    console.log('for real it is.')
    if (operator == "") {
      if (a == "0") {
        a = input;
      } else {
        a = a + input;
      };
      output = a;
    } else {
      if (b == "0") {
        b = input;
      } else {
        b = b + input;
      };
      output = b;
    };
  };

  if (isPoint()) {
    addPoint();
  }

  if (isOperator()) {
    if (operator == "") {
      operator = input;
    } else {
      a = Number(a);
      b = Number(b);
      operate(operator, a, b);
      console.log(result)
      operator = input;
      a = result;
      b = "0";
      output = a;
    };
  };

  console.log("a is: " + a);
  console.log("b is: " + b);
  console.log("operator is: " + operator);

  if (isEquals()) {
    a = Number(a);
    b = Number(b);
    operate(operator, a, b);
    console.log(result)
    operator = input;
    a = result;
    b = "0";
    output = a.toString();
  };

  if (isAllClear()) {
    reset();
  };

  if (isBackspace()) {
    if (operator == "") {
      a = a.slice(0, a.length - 1);
      output = a;
    } else {
      b = b.slice(0, b.length - 1);
      output = b;
    };
  };

  displayValue();
};

const isNumber = function () {
  const num = /[0-9]/
  if (num.test(input)) {
    console.log('you hit a number')
    //*add to current output, need to test for current 0.*//
    return true;
  };
};

const isOperator = function () {
  if (input == "+" || input == "-" || input == "*" || input == "/") {
    console.log('you hit an operator');
    //*make this the operator, test for if there is previously an operator, if so, operate, if not, just hold it a minute.*//
    return true;
  };
};

function isEquals() {
  if (input == "=" || input == "Enter") {
    console.log('equals button');
    //*operate dammit.*//
    return true;
  };
};

const isPoint = () => {
  if (input == ".") {
    return true;
  };
};

const addPoint = () => {
  let point = /[.]/
  if (operator == "") {
    if (!point.test(a)) {
      a = a + input;
    }
  } else {
    if (!point.test(b)) {
      b = b + input;
    }
  };
;}

const isAllClear = () => {
  if (input == "all-clear") {
    return true;
  };
};

const isBackspace = () => {
  if (input == "Backspace") {
    return true;
  };
};

const reset = () => {
  a = 0;
  b = 0;
  operator = "";
  output = 0;
};

function displayValue () {
  display.textContent = output;
}