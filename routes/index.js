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
    var fileContent;
    var posts = [];
    var count = 0;
    var readDir = fs.readdirSync('./views/blogs');
    readDir.forEach(function(e){
        console.log('./views/blogs/' + e);
        posts[count] = fs.readFileSync('./views/blogs/' + e, 'utf8');
        posts[count] = marked(posts[count]);
        count++;
    })
    res.render('index', {
      title: 'Blogs',
      posts: posts,
    });
})

module.exports = router;
