var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var PORT = Number(process.env.PORT || 5000);

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  res.render('index');
});

app.post('/addtask', function (req, res) {
  res.render('index')
});

app.listen(PORT, function () {
  console.log('Listening on port 5000!');
});
