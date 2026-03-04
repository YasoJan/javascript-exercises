const reverseString = function(str) {
  str_1 = "";
  for(let i = str.length-1; i >= 0; i--){
    str_1+=str[i];
  }
  return str_1;
};

// Do not edit below this line
module.exports = reverseString;
