const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
	//take an array of numbers and add all the numbers together
  return arr.reduce((total, item) =>{
    return total + item;
  }, 0);
};

const multiply = function(arr) {
//take an array of numbers and multiply all the numbers together
  const mutliple = arr.reduce((total, item) => {
    total = (total * item);
    return total;
  }, 1);
  console.log(mutliple);
  return mutliple;
};

const power = function(num1, num2) {
	return num1 ** num2;
};

const factorial = function(num) {
	if(num === 0 || num===1){
    return 1;
  }
  else{
    let factorial = 1;
    for(let i =num; i>=1; i--){
      factorial*=i;
    }
    return factorial;
}
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
