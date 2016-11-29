var gulp = require('gulp');
var gutil = require('gulp-util');

var logError = function(err){
  gutil.log('Error was found: ' + gutil.colors.inverse(err.message));
}

module.exports = {
  log: logError
}
