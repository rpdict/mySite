var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var fs = require('fs');
var marked = require('marked');


var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

app.engine('md', function(filePath, options, callback){
  fs.readFile(filePath, 'utf8', function(err, content){
    if (err) {
      return callback(new Error(err));
    }
    // content = "[Java Eye](http://www.iteye.com/ \"Click\") "
    console.log(content);
    content = marked(content);
    console.log("------------------------------------------------------------------------------------------------------------");
    console.log(content);
    return callback(null, content);
  });
});

app.set('views', './views'); // 指定视图所在的位置
app.set('view engine', 'md'); // 注册模板引擎

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
