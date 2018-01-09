const express    = require('express');
const bodyParser = require('body-parser');
const morgan     = require('morgan');
const path       = require('path');
const app        = express();
const lessons    = require('./routes/lessons');
const sneakers   = require('./routes/lessons');

app.use(bodyParser.json());
app.use(morgan('tiny'));
app.use('/',lessons);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.listen(3000, () => {
  console.log("YO! I'm listening");
});
