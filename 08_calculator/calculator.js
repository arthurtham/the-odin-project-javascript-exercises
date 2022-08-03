const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(values) {
	return values.length > 0 ? values.reduce((value, current) => value + current) : 0;
};

const multiply = function(values) {
  return values.reduce((value, current) => value * current);
};

const power = function(num, power) {
	//return Math.pow(num, pow);
  //return num ** pow;
  if (power <= 0) {
    return 1;
  }
  let result = num;
  for (let _i = 1; _i < power; _i++) {
    result *= num;
  }
  return result;
};

const factorial = function(num) {
  if (num <= 0) {
    return 1;
  }
	let result = num;
  for (let _i = num-1; _i > 0; _i--) {
    result *= _i;
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
