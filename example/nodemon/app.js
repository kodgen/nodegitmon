const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

var common = require('./nodegitmon/common')

var nodegitmon = require("./nodegitmon/checkout");
nodegitmon.checkout();

var page = fs.readFileSync(__dirname + '/nodemon.html', 'utf8');
const server = http.createServer((req, res) => {

    res.setHeader('Content-Type', 'text/html');
    res.setHeader('refresh',common.refreshTime);
    res.end(page);
});

server.listen(port, hostname, () => {
  console.log(`nodemon page running at http://${hostname}:${port}/`);
});


