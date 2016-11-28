var gulp = require('gulp');
var concat = require('gulp-concat');
var lint = require('gulp-jshint');
var useRemo = require('gulp-remove-use-strict');
var gutil = require('gulp-util');
var gulpJsdoc2md = require('gulp-jsdoc-to-markdown')
var clean = require('gulp-clean-dest');

var conf = require('./gulpConfig')

gulp.task('default', function () {
    return gulp
        .src(conf.js.src)
        .pipe(lint())
        .pipe(lint.reporter(conf.js.reporter))
        .pipe(concat(conf.js.outputName))
        .pipe(useRemo())
        .pipe(lint())
        .pipe(lint.reporter(conf.js.reporter))
        .pipe(clean(conf.js.outputFolder))
        .pipe(gulp.dest(conf.js.outputFolder));
});

gulp.task('htmlDocument', function(cb){
  return gulp
      .src([conf.jsdoc.src, conf.js.outputFolder + conf.js.outputName], {read: false})
      .pipe(jsdoc(cb));
})

gulp.task('markdownDocument', function(){
    return gulp
      .src(conf.js.src)
      .pipe(concat('api.md'))
      .pipe(gulpJsdoc2md())
      .on('error', function(err){
        gutil.log('jsdoc2md failed:', err.message)
      })
      .pipe(clean('./docs/'))
      .pipe(gulp.dest('./docs/'));
});
