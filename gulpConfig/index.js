var src = './src/';
var dest = './lib';
var report = require('jshint-stylish');

module.exports = {

  js: {

    src: [
      src + 'EventError.js',
      src + 'EventUtils.js',
      src + 'SimpleEmmiter.js',
      src + 'SimpleObserver.js'
    ],

    outputName: 'SimpleEvent.js',

    reporter: report,

    outputFolder: dest

  }

}
