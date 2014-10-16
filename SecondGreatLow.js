function SecondGreatLow(arr) { 

  // compare unique numbers only
  function sortAsc(a,b) {
    return a - b
  };

  var unique = arr.filter(function(num, id) {
      return arr.indexOf(num) == id;
  })

  return String(unique.sort(sortAsc).reverse()[unique.length-2]) + " " + String(unique.sort(sortAsc)[unique.length-2]); 
         
}

console.log(SecondGreatLow([1, 42, 42, 180]) === "42 42");
console.log(SecondGreatLow([4, 90]) === "90 4");
// console.log(SecondGreatLow([2,2,2,5,5,5,6]));
// console.log(SecondGreatLow([7, 7, 90, 1000003]));