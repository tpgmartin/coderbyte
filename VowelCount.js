function VowelCount(str) { 
  return str.match(/[aeiou]/g).length;         
}

console.log(VowelCount("hello") === 2);
console.log(VowelCount("coderbyte") === 3);