var report = require('jshint-stylish');

module.exports = {

  js: {
    src: [
      './src/EventError.js', './src/EventUtils.js', './src/CustomEvent.js'
    ],
    outputName: 'SimpleEvent.js',
    reporter: report,
    outputFolder: './lib/'
  },

  jsdoc: {
    src: './lib/',
    outputName: 'api.md',
    outputFolder: './docs'
  },

  load: {
    rename: {
      'gulp-concat': 'concat',
      'gulp-jshint': 'lint',
      'gulp-remove-use-strict': 'useRemo',
      'gulp-util': 'gutil',
      'gulp-jsdoc-to-markdown': 'gulpJsdoc2md',
      'gulp-clean-dest': 'clean',
      'gulp-uglify': 'uglify',
      'gulp-if': 'gif',
      'gulp-rename': 'rename'
    }
  },

  env: {
    production: true,
    developpement: false
  }

}
