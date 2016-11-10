var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/hw', function(req, res, next) {
  res.render('helloworld', { title: 'helloworld' });
});

router.get('/aa', function(req, res, next) {
  res.sendfile('./views/aa.html');
});

module.exports = router;
