var express = require('express');
var app = express();
var request = require('request');
var bodyParser = require('body-parser');
var argv = require('yargs').argv;
var http = require('http');
const apiKey = '94354a8546f85aa028ff02a560eef628';
var city = argv.c || 'miami';
var PORT = Number(process.env.PORT || 5000);
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`

//Middleware
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

var tasks = [];
var complete = [];

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
  let city = req.body.city;
  let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;
  request(url, function (err, response, body) {
    if(err){
      res.render('index', {weather: null, error: 'Error!'});
    } else {
      let weather = JSON.parse(body)
      if(weather.main == undefined) {
        res.render('index', {weather: null, error: 'Error!'});
      } else {
        let weatherNotification = `It's ${weather.main.temp} degrees in ${weather.name}!`;
        console.log(weatherNotification);
        res.render('index', {weather: weatherNotification, error: null, tasks: tasks, complete:complete});
      }
    }
  });
})


app.get('/', function (req, res) {
  res.render('index', {tasks: tasks, complete: complete, weather: null, error: null});
});

app.listen(PORT, function () {
  console.log('Listening on port 5000!');
});
