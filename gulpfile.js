//configuration
var conf = require('./gulpConfig')

// gulp and plugins
var gulp = require('gulp');
var load = require('gulp-load-plugins')(conf.load);
var sequence = require('run-sequence').use(gulp);

// config prod - dev
var options = require("minimist")(process.argv.slice(2))

// load gulp task
var js = require('./gulp-tasks/javascript');
var Document = require('./gulp-tasks/Document');

// gulp task developpement
gulp.task('build:dev', js.build);
gulp.task('lint:dev', js.lint);

// gulp task production
gulp.task('build:prod', js.prod);

// gulp task for documentation
gulp.task('markDoc', Document.mark);

// default gulp task for build and lint if dev env is true or uglify if prod env is true
gulp.task('default', function() {
  if (conf.env.production === true) {
    sequence('build:prod');
  }else{
    sequence('build:dev', 'lint:dev');
  };
});
