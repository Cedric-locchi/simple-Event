var gulp = require('gulp');
var concat = require('gulp-concat');
var lint = require('gulp-jshint');
var report = require('jshint-stylish');

gulp.task('default', function () {
    return gulp
        .src(['./src/EventError.js', './src/EventUtils.js', './src/SimpleEmmiter.js'])
        .pipe(lint())
        .pipe(lint.reporter(report))
        .pipe(concat('simpleEmitter.js'))
        .pipe(lint())
        .pipe(lint.reporter(report))
        .pipe(gulp.dest('./lib'));
});