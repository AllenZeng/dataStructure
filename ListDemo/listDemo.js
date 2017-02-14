var List = require('../3.list.js');
var fs = require('fs');
var readLine = require('readline');

const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout
});

function Customer(name, movie) {
  this.name = name;
  this.movie = movie;
}

function start() {
  fs.readFile('./films.text', 'utf8', (err, stream) => {
    if (err) {
      console.log(err);
    } else {
      var arr = stream.split('\n');
      var moveies = [];
      for (var i = 0; i < arr.length; i++) {
        moveies[i] = arr[i].trim();
      }
      startMoviesManagent(moveies);
    }
  });
}

function startMoviesManagent(moveies) {
  var movieList = new List();
  var customers = new List();

  var len = moveies.length;
  for (var i = 0; i < len; i++) {
    movieList.append(moveies[i]);
  }

  // var name = readline('your name: ');
  // var movie = readline('your movie: ');
  // checkOut(name, movie, movieList, customers);

  checkOut('Jane Doe', 'The Godfather', movieList, customers);

  console.log('\nCustomer Rentals: \n');
  displayList(customers);
}

function displayList(list) {
  for (list.front(); list.currPos() < list.length(); list.next()) {
    if (list.getElement() instanceof Customer) {
      console.log(list.getElement()['name'] + ', ' + list.getElement()['movie']);
    } else {
      console.log(list.getElement());
    }
  }
}

function checkOut(name, movie, movieList, customerList) {
  if (movieList.contains(movie)) {
    var customer = new Customer(name, movie);
    customerList.append(customer);
    movieList.remove(movie);
  } else {
    console.log(movie + ' is not available.');
  }
}

function checkIn(movie, movieList) {
  if (movieList.contains(movie)) {
    console.log(movie + ' is not checkout.');
  } else {
    movieList.append(movie);
  }
}

function readline(message) {
  var input = null;
  rl.question(message, (answer) => {
    input = answer;
    rl.close();
  });
  return input;
}

start();
