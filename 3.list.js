function List() {
  this.listSize = 0;
  this.pos = 0;
  this.dataStore = []; // 初始化一个空数组来保存列表元素
  this.clear = clear;
  this.find = find;
  this.toString = toString;
  this.insert = insert;
  this.insertMax = insertMax;
  this.insertMin = insertMin;
  this.append = append;
  this.remove = remove;
  this.front = front;
  this.end = end;
  this.prev = prev;
  this.next = next;
  this.hasNext = hasNext;
  this.hasPrev = hasPrev;
  this.length = length;
  this.currPos = currPos;
  this.moveTo = moveTo;
  this.getElement = getElement;
  this.contains = contains;
}

function append(element) {
  this.dataStore[this.listSize++] = element;
}

function find(element) {
  var len = this.dataStore.length;
  for (var i = 0; i < len; i++) {
    if (this.dataStore[i] === element) {
      return i;
    }
  }
  return -1;
}

function remove(element) {
  var foundAt = this.find(element);
  if (foundAt > -1) {
    this.dataStore.splice(foundAt, 1);
    --this.listSize;
    return true;
  }
  return false;
}

function length() {
  return this.listSize;
}

function toString() {
  return this.dataStore;
}

function insert(element, after) {
  var insertPos = this.find(after);
  if (insertPos > -1) {
    this.dataStore.splice(insertPos + 1, 0, element);
    ++this.listSize;
    return true;
  }
  return false;
}

function clear() {
  delete this.dataStore;
  this.dataStore.length = 0;
  this.listSize = this.pos = 0;
}

function contains(element) {
  var len = this.dataStore.length;
  for (var i = 0; i < len; i++) {
    if (this.dataStore[i] === element) {
      return true;
    }
  }
  return false;
}

function front() {
  this.pos = 0;
}

function end() {
  this.pos = this.listSize - 1;
}

function prev() {
  --this.pos;
}

function next() {
  if (this.pos < this.listSize) {
    ++this.pos;
  }
}

function currPos() {
  return this.pos;
}

function moveTo(position) {
  this.pos = position;
}

function getElement() {
  return this.dataStore[this.pos];
}

function hasNext() {
  return this.pos < this.listSize;
}

function hasPrev() {
  return this.pos >= 0;
}

function insertMax(element) {
  var len = this.dataStore.length;
  for (var i = 0; i < len; i++) {
    if (this.dataStore[i] > element) {
      console.log('the insert element is not max.');
      return;
    }
  }
  this.append(element);
}

function insertMin(element) {
  var len = this.dataStore.length;
  for (var i = 0; i < len; i++) {
    if (this.dataStore[i] < element) {
      console.log('the insert element is not min.');
      return;
    }
  }
  this.append(element);
}

module.exports = List;
