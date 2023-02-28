const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function([...arr]) {
    let sum = 0
         for (let i = 0; i < arr.length; i ++) {
             sum += arr[i];
         }
         return sum;
};

const multiply = function([...arr]) {
  let multi = 1
  for (let i = 0; i < arr.length; i ++) {
      multi *= arr[i];
  }
  return multi;
};

const power = function(num1, num2) {
	return num1 ** num2;
};

const factorial = function(num) {
	  if (num < 0) 
        return -1;
  else if (num == 0) 
      return 1;
  else {
      return (num * factorial(num - 1));
  }
}


// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
