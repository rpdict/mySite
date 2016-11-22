var express = require('express');
var router = express.Router();
var marked = require('marked');
var fs = require('fs');



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Welcome',
    description: 'The official example template of creating a blog with Bootstrap.'
  });
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
    res.render('blogs', {
      title: 'Blogs',
      description: 'The official example template of creating a blog with Bootstrap.',
      posts: posts
    });
})

module.exports = router;
