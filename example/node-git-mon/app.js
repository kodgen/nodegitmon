
const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

var common = require('./nodegitmon/common')

var nodegitmon = require("./nodegitmon/checkout");
nodegitmon.checkout();

var page = fs.readFileSync(__dirname + '/nodegitmon.html', 'utf8');
const server = http.createServer((req, res) => {

  res.setHeader('Content-Type', 'text/html');
  res.setHeader('refresh',common.refreshTime);
  res.end(page);
});

server.listen(port, hostname, () => {
  console.log(`nodegitmon page running at http://${hostname}:${port}/`);
});

