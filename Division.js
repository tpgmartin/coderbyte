function Division(num1,num2) { 

  var factors = [];
  for(var i=1; i<=num1; i+=1) {
    (num1 % i=== 0 && num2 % i === 0) ? factors.push(i) : -1;
  }
  return factors.pop();
         
}

console.log(Division(7,3) === 1);
console.log(Division(36,54) === 18);