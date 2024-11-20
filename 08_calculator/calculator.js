const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(arr) {
return arr.reduce((acc, curr) => acc + curr, 0);
	
};

const multiply = function(arr) {
  return arr.reduce((acc, curr) => acc * curr);
};

const power = function(a, b) {
  return a ** b;
	
};

const factorial = function(n) {
  if (n == 0 || n == 1) return 1;
  let result = n;
  for (let i = n - 1; i > 0; i--) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
