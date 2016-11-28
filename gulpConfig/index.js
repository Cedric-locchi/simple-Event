var report = require('jshint-stylish');

module.exports = {

  js: {

    src: [
      './src/EventError.js',
      './src/EventUtils.js',
      './src/CustomEvent.js'
    ],

    outputName: 'SimpleEvent.js',

    reporter: report,

    outputFolder: './lib/'

  },

  jsdoc: {

    src: './docs/API.md'

  }

}
