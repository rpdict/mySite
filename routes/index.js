var express = require('express');
var router = express.Router();
var marked = require('marked');
var fs = require('fs');



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

// router.get('/markdown1', function(req, res) {
//     var html = markdown.toHTML("[Java Eye](http://www.iteye.com/ \"Click\") ");
//     res.send(html)
//     res.end();
// })

router.get('/markdown', function(req, res) {
    res.render('index.md', {layout: false});
    // var fileContent;
    // fileContent = fs.readFileSync('./views/index.md', 'utf8');
    // fileContent = marked(fileContent);
    // res.send(fileContent);
    // res.end();
})

module.exports = router;
