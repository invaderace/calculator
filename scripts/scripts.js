let answer;

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
