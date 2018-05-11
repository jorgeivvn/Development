var Twitter = require('twitter');
var config = require('./config.js');

var T = new Twitter(config);


//Two parts to favoriting a tweet:
//1. Search for tweets that you want to favorite
//2. Select one, and favorite it.

var params = {
  q: '#nodejs',
  count: 10,
  result_type: 'recent',
  lang: 'en'
}
