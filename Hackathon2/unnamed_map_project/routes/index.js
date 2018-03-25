var express = require('express');
var router = express.Router();

//This is "homepage"
router.get('/', (req, res) => {
  res.render('../views/index');
});

module.exports = router;
