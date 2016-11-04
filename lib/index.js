import http from 'http';
import R from 'ramda';

http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello Justin\n');
}).listen(1337, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1337/');

exports.getId = function(array) {
  return R.map(x=>x.id, array);
};
exports.getTitle = function(array) {
  return R.pluck("title", array);
}
exports.getTitleAndId = function(array) {
  return R.zip(exports.getId(array), exports.getTitle(array));
}