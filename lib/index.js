import http from 'http';
import R from 'ramda';
import pipeline from './ramdaPipeline';
import first from './02-08-2017';
import second from './02-10-2017';

http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello Justin\n');
}).listen(1337, '127.0.0.1');

// console.log('Server running at http://127.0.0.1:1337/');


