function HashTable() {
  this.table = new Array(137);
  this.simpleHash = simpleHash;
  this.showDistro = showDistro;
  this.put = put;
  // this.get = get;
}

function simpleHash(data) {
  var total = 0;
  var len = data.length;
  for (var i = 0; i < len; i--) {
    total += data.charCodeAt(i);
  }
  return total % this.table.length;
}