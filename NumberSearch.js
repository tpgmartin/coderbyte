function NumberSearch(str) { 

  var sum = 0;
  var numbers = str.match(/[0-9]/g);
  
  if (numbers) { 
    sum = numbers.reduce(function(a, b) {
      return parseInt(a) + parseInt(b);
    });
  } 
        
  var letters = str.match(/[a-zA-Z]/g).length;
  return Math.round(sum/letters);
         
}

console.log(NumberSearch("H3ello9-9") === 4);
console.log(NumberSearch("One Number*1*") === 0);