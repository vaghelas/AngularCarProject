//jshint strict: false
module.exports = function(config) {
  config.set({

    basePath: './app',

    files: [
      'bower_components/angular/angular.js',
      'bower_components/angular-ui-router/release/angular-ui-router.js',
      'bower_components/angular-credit-cards/release/angular-credit-cards.js',
      'bower_components/angular-ui-bootstrap-bower/ui-bootstrap.min.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'src/app.module.js',
      'src/shared/services/*.js',
      'src/controllers/*.js',
      'src/tests/*.js'
    ],

    autoWatch: true,

    frameworks: ['jasmine'],

    browsers: ['Chrome'],

    plugins: [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine',
      'karma-junit-reporter'
    ],

    junitReporter: {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
