/* jshint esversion: 6 */

var http = require('http');

var app = http.createServer(function (req, res) {

  // Build answer
  var answer = '';
  answer += 'Request URL: ' + req.url + '\n';
  answer += 'Request type: ' + req.method + '\n';
  answer += 'Request headers: ' + JSON.stringify(req.headers) + '\n';

  // Simple routing
  if (req.url === "/") {
    answer = "Welcome to the homepage!\n" + answer;
  } else if (req.url === "/techno") {
    answer = "Welcome to the technopage!\n" + answer;
  } else {
    answer = "Welcome to the errorpage!\n" + answer;
  }

  // Send answer
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(answer);

});

app.listen(1337, 'localhost');
console.log('Server running at http://localhost:1337/');
