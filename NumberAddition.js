function NumberAddition(str) { 

  return str.match(/[0-9]+/g).reduce(function(a,b) {
    return parseInt(a) + parseInt(b);
  });
         
}

console.log(NumberAddition("75Number9") === 84);
console.log(NumberAddition("10 2One Number*1*") === 13);