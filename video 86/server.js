// const { createServer } = require('node:http');
// const fs = require('fs');
// common js syntax


// import http from 'http';  module syntax

// const { createServer } = require('node:http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });



// NAMED EXPORT USAGE
// import a from './mymodule.js';
// import b, { c, d } from './mymodule.js';
// console.log(a, b, c, d); // 1 2 3 4



import obj from './mymodule.js';

