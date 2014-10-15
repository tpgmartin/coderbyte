function SimpleSymbols(str) { 
  var before = str.match(/\+[a-z]/g);
  var after = str.match(/[a-z]\+/g);
  var letters = str.match(/[a-z]/g);
  if (before && after && letters) {
    return (before.length === after.length) && (before.length === letters.length);
  }
  return false;
         
}

console.log(SimpleSymbols("+d+=3=+s+"));
console.log(SimpleSymbols("f++d+"));
console.log(SimpleSymbols("aaaa"));
console.log(SimpleSymbols("+z+z+z+"));
console.log(SimpleSymbols("+a="));
console.log(SimpleSymbols("2+a+a+"));
console.log(SimpleSymbols("+z+z+==+a+"));
console.log(SimpleSymbols("==a+"));
console.log(SimpleSymbols("b"));