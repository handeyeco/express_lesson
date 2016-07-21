var express = require('express');

var app = express();

//Set views directory
app.set('views', __dirname + '/views');

//Use Pug templating language
app.set('view engine', 'pug');

app.get('/', function(req, res) {
  res.render('index', { message: 'I love techno' });
});

app.listen(1337);
console.log('Server running at: http://localhost:1337');
