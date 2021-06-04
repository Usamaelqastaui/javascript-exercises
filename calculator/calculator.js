const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(a) {
	return a.reduce((acc,value)=>{
    return acc += value;
  },0)
};

const multiply = function(a) {
  return a.reduce((acc, val)=>{
    return acc *= val; 
  }, 1)
};

const power = function(a, b) {
	let sum = 1;
  for(let i = 0; i < b; i++){
    sum *= a
  }
  return sum;
};

const factorial = function(num) {

  if(num === 0 || num === 1){
    return 1;
  } else {
    let sum = 1;
    for(let i = 1; i <= num; i++){
      sum *= i;
    }
    return sum;
  }
};

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
