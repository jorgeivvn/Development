var express = require('express');
var app = express();
var PORT = Number(process.env.PORT || 5000);

app.get('/', function (req, res) {
  res.send('Hello Oracle World');
});

app.listen(PORT, function () {
  console.log('Listening on port 5000!');
});
