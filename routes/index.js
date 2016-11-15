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

// router.get('/aa', function(req, res, next) {
//   res.sendfile('./views/aa.html');
// });

router.get('/markdown', function(req, res) {
    // res.render('blogs/index.md', {layout: false});
    var fileContent;
    var posts = [];
    fileContent = fs.readFileSync('./views/blogs/index.md', 'utf8');
    fileContent = marked(fileContent);
    console.log(fileContent);

    res.render('index', {
      title: 'Blogs',
      // user: req.session.user,
      posts: fileContent,
      // success: req.flash('success').toString(),
      // error: req.flash('error').toString()
    });
    // res.send(fileContent);
    // res.end();
})

module.exports = router;
