var Stack = require('../4.stack.js');

function isPalindroe(word) {
  var s = new Stack();
  var len = word.length;
  for (var i = 0; i < len; i++) {
    s.push(word[i]);
  }

  var rword = '';
  while (s.length() > 0) {
    rword += s.pop();
  }

  if (word == rword) {
    return true;
  } else {
    return false;
  }
}

var word = 'hello';
if (isPalindroe(word)) {
  console.log(word + ' is a palindrome.');
} else {
  console.log(word + ' is not a palindrome');
}

word = 'racecar';
if (isPalindroe(word)) {
  console.log(word + ' is a palindrome.');
} else {
  console.log(word + ' is not a palindrome');
}
