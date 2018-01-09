const express = require('express');
const router = express.Router();
const lessonsArray = require('../models/lessons');

const sneakersArray = require('../models/sneakers');


router.get('/lessons', function(req, res){
  res.render('lessons/index', {lessonsArray: lessonsArray});
});

router.get('/sneakers', function(req, res){
  res.render('sneakers/index', {sneakersArray: sneakersArray});
});



module.exports = router;
