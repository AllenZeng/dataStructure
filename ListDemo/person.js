var List = require('../3.list.js');

function Person(name, sex) {
  this.name = name;
  this.sex = sex;
}

var persons = new List();

for (var i = 0; i < 10; i++) {
  var sex = 'man';
  if (i % 2) {
    sex = 'woman';
  }
  var person = new Person('allen ' + i, sex);
  persons.append(person);
}

function displayPerson(list, sex) {
  var len = list.length;
  for (list.front(); list.currPos() < list.length(); list.next()) {
    var person = list.getElement();
    if (person.sex === sex) {
      console.log(person.name, sex);
    }
  }
}

displayPerson(persons, 'man');
