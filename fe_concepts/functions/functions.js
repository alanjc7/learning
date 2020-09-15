//anonymous funtion (function expression)
var sum = function(a, b) {
  return a + b;
};

//factorial
const factorial = function factorial(n) {
  if ( n === 0 ) { return 1 };
  return n * f(n-1)
}

//function declaration
var m = function multiply(a, b) {
  return a * b;
};

//function (expression) passed as argumaent to another function




//arrow function
var square = (number) => number * number ;

//function constructor - not sure why this would be used?
var divide = new Function('a', 'b', 'return a / b');

//IIFE Immediately Invoked Function Expression
(function() {
  function map(f, a) {
    var result = [];
    var i;
    for (i = 0; i != a.length; i++)
      result[i] = f(a[i]);
        return result;
  }

  var square = map(x => x * x ,[0, 1, 2, 5, 10]);
  console.log(square);
})();
