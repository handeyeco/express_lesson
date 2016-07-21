var express = require('express');
var http = require('http');

var app = express();

app.all('*', function(req, res, next) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  next();
});

app.get('/', function(req, res) {
  res.end('Welcome to the homepage!');
});

app.get('/about', function(req, res) {
  res.end('Welcome to the about page!');
});

app.get('/hello/:who', function(req, res) {
  res.end('Hello, ' + req.params.who + '.');
});

app.get('*', function(req, res) {
  res.end('404!');
});

http.createServer(app).listen(1337);
