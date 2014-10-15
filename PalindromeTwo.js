function PalindromeTwo(str) { 

  var letters_only = str.match(/[a-zA-Z]/g);   
  return letters_only.join('').toLowerCase() === letters_only.reverse().join('').toLowerCase(); 
         
}

console.log(PalindromeTwo("Noel - sees Leon") === true);
console.log(PalindromeTwo("A war at Tarawa!") === true);