var Stack = require('../4.stack.js');

function fact(n) {
  var s = new Stack();
  while (n > 1) {
    s.push(n--);
  }
  var product = 1;
  while (s.length() > 0) {
    product *= s.pop();
  }

  return product;
}


function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

var start = Date.now();

console.log(fact(30000000));
console.log(factorial(3000));

console.log(Date.now() - start);
