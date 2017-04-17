import http from 'http';
// import pipeline from './ramdaPipeline';
// import first from './02-08-2017';
// import second from './02-10-2017';
// import third from './02-12-2017';
// import fourth from './ramdaLibrary';
// import fifth from './playground';
<<<<<<< HEAD
import sixth from './closure';
//import seventh from './04-17-2017'
=======
//import sixth from './closure';
//import counterObject from './counterObject';
import prototypal from './prototypal';
>>>>>>> 984519c27bd9ec3290121ca357736c9584dfca61

http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello Justin\n');
}).listen(1337, '127.0.0.1');

// console.log('Server running at http://127.0.0.1:1337/');


