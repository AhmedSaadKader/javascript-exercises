const add = function(...args) {
	const sum = args.reduce((previousValue, currentValue) => previousValue + currentValue, 0)
  return sum
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(args) {
  const sum = args.reduce((previousValue, currentValue) => previousValue + currentValue, 0)
  return sum
};

const multiply = function(args) {
  const result = args.reduce((previousValue, currentValue) => previousValue * currentValue, 1)
  return result
};

const power = function(a, b) {
  return a ** b
};

const factorial = function(num) {
	let result = 1
  if (num === 0) {
    return result
  }
  for(let i = 1; i <= num; i++){
    result = result * i
  }
  return result
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
