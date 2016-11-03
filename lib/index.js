import http from 'http';
var R = require('ramda');

http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello Justin\n');
}).listen(1337, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1337/');

function isString (test) {
    return R.is(String, test);
}
var result = isString('foo');
console.log(result);