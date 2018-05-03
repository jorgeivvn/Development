var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var PORT = Number(process.env.PORT || 5000);


//Middleware
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

var tasks = ['go to gym', 'prepare for Oracle interview'];
app.post('/addtask', function (req, res) {
  var newTask = req.body.newtask;
  tasks.push(newTask);
  res.redirect('/');
});

app.get('/', function (req, res) {
  res.render('index', {tasks: tasks});
});

var complete = ['take dog for a walk'];
app.post('/deletetask', function(req, res) {
  var completeTask = req.body.check;
})

app.listen(PORT, function () {
  console.log('Listening on port 5000!');
});
