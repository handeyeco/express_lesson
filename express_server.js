var express = require('express');
var http = require('http');

// Build app
var app = express();

//Logging middleware
app.use(function(req, res, next) {
  console.log("In comes a " + req.method + " to " + req.url);
  next();
});

//Write middleware
app.use(function(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!\n');
});

// Start app
http.createServer(app).listen(1337);
console.log("Server running at http://localhost:1337");
