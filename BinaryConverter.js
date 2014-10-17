function BinaryConverter(str) { 

  return String(parseInt(str,2));
         
}

console.log(BinaryConverter("100101") === "37");
console.log(BinaryConverter("011") === "3");