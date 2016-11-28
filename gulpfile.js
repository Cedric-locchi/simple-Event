var gulp = require('gulp');
var concat = require('gulp-concat');
var lint = require('gulp-jshint');
var useRemo = require('gulp-remove-use-strict');
var wrapper = require('gulp-module-wrapper');

var config = require('./gulpConfig').js;

gulp.task('default', function () {
    return gulp
        .src(config.src)
        .pipe(lint())
        .pipe(lint.reporter(config.reporter))
        .pipe(concat(config.outputName))
        .pipe(useRemo())
        .pipe(lint())
        .pipe(lint.reporter(config.reporter))
        .pipe(gulp.dest(config.outputFolder));
});
