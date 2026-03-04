function repeatString(str, num) {
  if(num < 0){
    return "ERROR";
  }
  str1 = ""
  for(let i =0; i<num; i++){
    str1+=str;
  }
return str1;
}

// Do not edit below this line
module.exports = repeatString;
