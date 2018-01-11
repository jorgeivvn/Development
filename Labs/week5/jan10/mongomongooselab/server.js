const express = require('express');
const bodyParser = require('body-parser');
const morgan = require ('morgan');
const path = require('path');
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.use(bodyParser.json());
app.use(morgan('tiny'));
app.set('view engine', 'ejs');

var Todo = require('./models/todo');

var today = new Todo({
  task: "Go to GA class today!",
  description: "Create a this TODO list"
});

//create get route
app.get('/save', function(req, res){
  today.save(function(err, newTodo) {
    if(err) {return console.log(err);}
    console.log("saved todo: ", newTodo);
  });
});

app.get('/api/todos', function todosIndex(req, res){
  todo.find(function handleDBTodosListed(err, allTodos) {
    res.json({ todos: allTodos });
  });
});

// app.get()

app.get('*', function(req, res) {
  res.send('On the home page!')
});
// app.get('/models/todo', function (req, res) {
//   db.Todo.find(function(err, todo) {
//     if (err) {
//       console.log("index error: " + err);
//     }
//     res.json(todo);
//   });
// });

app.listen(3000, () => {
  console.log('YOOOOO Whats good?');
  });
