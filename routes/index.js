var express = require('express');
var router = express.Router();
var marked = require('marked');
var fs = require('fs');
var multer = require('multer');
var upload = multer({dest: './views/blogs'});
/** Permissible loading a single file,
    the value of the attribute "name" in the form of "recfile". **/
var type = upload.single('recfile');



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

router.get('/uploadblog', function(req, res, next) {
  res.render('upload', {
    title: 'upload'
  });
});

router.post('/uploadblog', type, function (req,res) {

  /** When using the "single"
      data come in "req.file" regardless of the attribute "name". **/
  var tmp_path = req.file.path;

  /** The original name of the uploaded file
      stored in the variable "originalname". **/
  var target_path = './views/blogs/' + req.file.originalname;

  /** A better way to copy the uploaded file. **/
  var src = fs.createReadStream(tmp_path);
  var dest = fs.createWriteStream(target_path);
  fs.unlink(tmp_path);
  src.pipe(dest);
  // src.on('end', function() { res.render('complete'); });
  // src.on('error', function(err) { res.render('error'); });
  res.redirect('/markdown');

});

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
        fs.stat('./views/blogs/' + e, function (err, stats) {
            console.log("fs.Stats对象属性：\n");
            console.log(stats);
            console.log("fs.Stats对象方法：\n");

            console.log("isFile: " + stats.isFile());
            console.log("isDirectory: " + stats.isDirectory());
            console.log("isBlockDevice: " + stats.isBlockDevice());
            console.log("isCharacterDevice: " + stats.isCharacterDevice());
            console.log("isFIFO: " + stats.isFIFO());
            console.log("isSocket: " + stats.isSocket());
        });
    })
    res.render('blogs', {
      title: 'Blogs',
      description: 'The official example template of creating a blog with Bootstrap.',
      posts: posts
    });
})

module.exports = router;
