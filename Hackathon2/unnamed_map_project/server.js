var express = require ('express');
var app = express();
var morgan = require('morgan');
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');
var cookieParser = require('cookie-parser');
// var expressSession = require('express-session');
var API = require('./app-env.js')

app.use(express.static('public'));
app.set('view engine', 'ejs');


app.get('/', (req, res) => {
  res.render('../views/index', { googleAPI: API.GOOGLE_MAPS_API});
});









app.listen(3000, () => {
  console.log("What's Gucci?");
});
