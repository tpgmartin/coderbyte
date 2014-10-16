function FibonacciChecker(num) { 

  var isPerfectSquare = function(num) {
    var root = Math.round(Math.sqrt(num));
    return (root*root == num);
  }

  if (isPerfectSquare(5*num*num + 4) || isPerfectSquare(5*num*num - 4)
) {
    return 'yes';
  }
  return 'no';
         
}
   
console.log(FibonacciChecker(34) === 'yes');
console.log(FibonacciChecker(54) === 'no');