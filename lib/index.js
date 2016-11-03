import http from 'http';
var R = require('ramda');

http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello Justin\n');
}).listen(1337, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1337/');


var isString = R.is(String);
var result = isString("foo");
console.log(result);

var toUpperCase = function(x) {
  return x.toUpperCase();
};
var exclaim = function(x) {
  return x + "!";
};
var shout = R.compose(exclaim, toUpperCase);
console.log(shout("hi"));

var array = ["hello","my name is","justin"];
var lengthOfArray = R.map(x => x.length, array);
console.log(lengthOfArray);