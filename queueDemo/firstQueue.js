var Queue = require('../5.queue.js');

function Patient(name, code) {
  this.name = name;
  this.code = code;
}

function dequeue() {
  var entry = 0;
  var len = this.dataStore.length;
  for (var i = 0; i < len; i++) {
    if (this.dataStore[i].code < this.dataStore[entry].code) {
      entry = i;
    }
  }
  return this.dataStore.splice(entry, 1);
}

function toString() {
  var retStr = '';
  var len = this.dataStore.length;
  for (var i = 0; i < len; i++) {
    retStr += this.dataStore[i].name + ' code: ' + this.dataStore[i].code + '\n';
  }
  return retStr;
}

var p = new Patient('Smith', 5);
var ed = new Queue();
ed.enqueue(p);
p = new Patient('Jones', 4);
ed.enqueue(p);
p = new Patient('Fehrenbach', 6);
ed.enqueue(p);
p = new Patient('Brown', 1);
ed.enqueue(p);
p = new Patient('Ingram', 1);
ed.enqueue(p);

ed.toString = toString;
console.log(ed.toString());

ed.dequeue = dequeue;
var seen = ed.dequeue();

console.log('Patient being treated: ' + seen[0].name);
console.log('Patients waiting to be seen: ');
console.log(ed.toString());

seen = ed.dequeue();
console.log('Patient being treated: ' + seen[0].name);
console.log('Patients waiting to be seen: ');
console.log(ed.toString());
