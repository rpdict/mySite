var gulp = require('gulp');
    less = require('gulp-less');
    babel = require('gulp-babel');
    concat = require('gulp-concat');

gulp.task('frontend-styles', function() {
  gulp.src('frontend/styles/main.scss') //该任务针对的文件
          .pipe(less()) //该任务调用的模块
          .pipe(gulp.dest('public/stylesheets/')); //将会在public/stylesheets下生成main.css
});

gulp.task('frontend-scripts', function() {
  return gulp.src(['node_modules/jquery/dist/jquery.js',
                  'node_modules/bootstrap/dist/js/bootstrap.js',
                  'frontend/scripts/main.js'])
          .pipe(concat('vendor.js')) //该任务调用的模块
          .pipe(gulp.dest('public/javascripts/')); //将会在public/javascripts下生成vendor.js
});

gulp.task('default', ['frontend-styles', 'frontend-scripts']);
