var Queue = require('../5.queue.js');
var fs = require('fs');

function Dancer(name, sex) {
  this.name = name;
  this.sex = sex;
}

function getDancers(males, females) {
  fs.readFile('./Dancers.text', 'utf-8', (err, stream) => {
    var names = stream.split('\n');
    console.log(names);
    var len = names.length;
    for (var i = 0; i < len; i++) {
      names[i] = names[i].trim();
    }

    var femaleDancers = new Queue();
    var maleDancers = new Queue();

    for (var i = 0; i < len; i++) {
      var dancer = names[i].split(' ');
      var sex = dancer[0];
      var name = dancer[1];
      if (sex === 'F') {
        femaleDancers.enqueue(new Dancer(name, sex));
      } else {
        maleDancers.enqueue(new Dancer(name, sex));
      }
    }

    dance(maleDancers, femaleDancers);
  });
}

function dance(males, females) {
  console.log('The dance partners are:\n');

  while (!females.empty() && !males.empty()) {
    var person = females.dequeue();
    console.log('The Female dancer is: ' + person.name);
    person = males.dequeue();
    console.log('The Male dancer is: ' + person.name);
    console.log('\n');
  }
}

getDancers();
