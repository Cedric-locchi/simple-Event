var gulp = require('gulp');
var conf = require('../gulpConfig');
var utils = require('./errors');
var load = require('gulp-load-plugins')(conf.load);

/**
 * @description build javascript for developpement
 */
var build = function() {
  return gulp
      .src(conf.js.src)
      .pipe(load.concat(conf.js.outputName))
      .pipe(load.useRemo()).pipe(load.lint())
      .pipe(gulp.dest(conf.js.outputFolder));
}

/**
 * @description build javascript for production
 */
var production = function(){
  return gulp
      .src(conf.js.outputFolder + '/*.js')
      .pipe(load.uglify())
      .pipe(load.rename({ suffix: '.min' }))
      .pipe(gulp.dest(conf.js.outputFolder))
}

/**
 * @description lint javascript for developpement
 */
var lint = function(){
  return gulp
    .src(conf.js.outputFolder)
    .pipe(load.lint())
    .pipe(load.lint.reporter(conf.js.reporter))
    .on('error', utils.log);
}

module.exports = {
  build : build,
  lint: lint,
  prod: production
};
