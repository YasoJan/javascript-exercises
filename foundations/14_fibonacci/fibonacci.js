const fibonacci = function(num) {
  if(typeof num === "string"){
    num = parseInt(num);
  }
  if(num < 0){
    return "OOPS";
  }
  if(num === 0){
    return 0;
  }
  let arr = [1, 1];
  for(let i = 1; i<num; i++){
    arr.push(arr[i] + arr[i-1]);
  }
  return arr[num-1];
};

// Do not edit below this line
module.exports = fibonacci;
