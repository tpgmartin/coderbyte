function PowersofTwo(num) { 

  return (num & -num) === num; 
         
}

console.log(PowersofTwo(4) === true);
console.log(PowersofTwo(124) === false);