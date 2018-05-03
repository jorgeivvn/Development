var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var http = require('http');
var url = 'http://api.openweathermap.org/data/2.5/weather?id=4058076&APPID=8e21efc86f5a2d4198cf1d4e4cbaead0';
var PORT = Number(process.env.PORT || 5000);


//Middleware
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

var tasks = ['go to gym', 'prepare for Oracle interview'];
var complete = ['take dog for a walk'];

app.post('/addtask', function (req, res) {
  var newTask = req.body.newtask;
  tasks.push(newTask);
  res.redirect('/');
});

app.post('/deletetask', function(req, res) {
  var completeTask = req.body.check;
  if(typeof completeTask === 'string') {
    complete.push(completeTask);
    tasks.splice(tasks.indexOf(completeTask), 1);
  } else if (typeof completeTask === 'object') {
    for(var i = 0; i < completeTask.length; i++) {
      complete.push(completeTask[i]);
        tasks.splice(tasks.indexOf(completeTask[i]), 1);
    }
  }
  res.redirect('/');
});

app.post('/getweather', function (req, res) {
  console.log(req.body.city);
  res.redirect('/');
})

app.get('/', function (req, res) {
  res.render('index', {tasks: tasks, complete: complete});
});

app.listen(PORT, function () {
  console.log('Listening on port 5000!');
});
