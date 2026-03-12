const palindromes = function (str) {
  str = str.replaceAll(",", "").replaceAll(" ", "").replaceAll(".", "").replaceAll("!","").toLowerCase();
  
  let reversedStr = str.split("").reverse().join("");

  return str === reversedStr;
};

// Do not edit below this line
module.exports = palindromes;
