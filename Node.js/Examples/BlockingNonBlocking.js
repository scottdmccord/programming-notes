// Blocking Event

// gets a user from the database
var getUserSync = require('.getUserSync');

var user1 = getUserSync('123');
console.log('user1', user1);

var user2 = getUserSync('321');
console.log('user2', user2);

var sum = 1 + 2;
console.log('sum: ', sum);

/////////////////////////////

// Non-blocking Event

// Uses callbacks to run multiple requests to the database.

// gets a user from the database
var getUser = require('.getUserSync');

getUser('123', function (user1) {
  console.log('user1', user1);
});

getUser('321', function (user2) {
  console.log('user2', user2);
});

var sum = 1 + 2;
console.log('sum: ', sum);

/////////////////////////////
