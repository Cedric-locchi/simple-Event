var gulp = require('gulp');
var conf = require('../gulpConfig');
var utils = require('./errors');
var load = require('gulp-load-plugins')(conf.load);

var markdown = function(){
    return gulp
      .src(conf.js.src)
      .pipe(load.concat(conf.jsdoc.outputName))
      .pipe(load.gulpJsdoc2md())
      .on('error',utils.log)
      .pipe(load.clean(conf.jsdoc.outputFolder))
      .pipe(gulp.dest(conf.jsdoc.outputFolder));
}

module.exports = {
  mark: markdown
}
