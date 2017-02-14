function Dictionary() {
  this.add = add;
  this.dataStore = new Array();
  this.find = find;
  this.remove = remove;
  this.showAll = showAll;
  this.count = count;
  this.clear = clear;
}

function add(key, value) {
  this.dataStore[key] = value;
}

function find(key) {
  return this.dataStore[key];
}

function remove(key) {
  delete this.dataStore[key];
}

function showAll() {
  var dataKeys = Array.prototype.slice.call(Object.keys(this.dataStore));
  for (var key in dataKeys) {
    if (dataKeys.hasOwnProperty(key)) {
      //
    }
  }
}

function count() {
  return Object.keys(this.dataStore).length;
}

function clear() {
  this.dataStore = new Array();
}