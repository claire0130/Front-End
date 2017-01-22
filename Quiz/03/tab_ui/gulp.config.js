// @private project {}
var project = {
  'source': './src/',
  'destination': './dist/'
};

// @exports config {}
var config = {
  'js': {
    'src': project.source + '**/*.js',
    'dest': project.destination,
    'options': {
      'pretty': true
    }
  },
  'sass': {
    'src': project.source + 'sass/**/*.{sass,scss}',
    'dest': project.destination + 'css',
    'sourcemaps': {
      'use': true,
      'location': '../maps'
    },
    'options': {
      // nested, expanded, compact, compressed
      'outputStyle': 'expanded'
    }
  },
};

// 외부 모듈 공개
module.exports = config;