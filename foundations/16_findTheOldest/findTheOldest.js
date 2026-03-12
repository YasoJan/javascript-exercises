const findTheOldest = function(arr) {
  const mapped = arr.map((curr_obj, index)=>{
    if(!Object.hasOwn(curr_obj, 'yearOfDeath')){
      curr_obj.yearOfDeath = 2026;
    }
    return curr_obj;
  });
  mapped.sort((a, b) =>{
   return (b.yearOfDeath - b.yearOfBirth) - (a.yearOfDeath - a.yearOfBirth);
  });

  return mapped[0];
};
// Do not edit below this line
module.exports = findTheOldest;


/*
const people = [
      {
        name: "Carly",
        yearOfBirth: 1942,
        yearOfDeath: 1970,
      },
      {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
      },
      {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
      },
    ]
*/