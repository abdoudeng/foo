var express = require('express');
var router = express.Router();
// var files = require('../views/home.html')
/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.sendFile('/private/tmp/foo/src/home.html')
});

module.exports = router;
