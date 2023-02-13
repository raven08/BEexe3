const http = require('http');
const members = require('./members');
const users = require('./users');
const axios = require('axios');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    res.write('This is the home page\n');
  } else if(req.url ==='/about') {
    res.write(JSON.stringify({
        'status': 'succes',
        'massage': 'respon success',
        'Description': 'Exercise #03',
        'Date': new Date().toISOString(),
        'Members': members
    }))
  }else if(req.url ==='/users'){
    res.write(JSON.stringify({users}));
  }
  else {
    res.statusCode = 404;
    res.write('404 Not Found\n');
  }
  res.end();
});
const hostname = '127.0.0.1';
const port = 3000;
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
