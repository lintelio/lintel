/*
 * lintel
 * https://github.com/lintelio/lintel
 *
 * Copyright (c) 2014 Marius Craciunoiu
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {
  // load all npm grunt tasks
  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({

    // Inject sass files in lintel.scss
    injector: {
      options: {
        addRootSlash: false,
        relative: true,
        starttag: '// lintelinjector:{{ext}}',
        endtag: '// endlintelinjector',
        transform: function(file) {
          return '@import "' + file + '";';
        }
      },
      sass: {
        files: {
          'sass/lintel.scss': [
            'sass/lintel/*.scss',
            '!sass/lintel/vars.scss',
            '!sass/lintel/functions.scss',
            '!sass/lintel/mixins.scss'
          ]
        }
      }
    },

    // Compile sass
    sass: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          'dist/lintel.css': 'sass/lintel.scss'
        }
      }
    },

    // Autoprefix sass
    autoprefixer: {
      dist: {
        src: ['dist/lintel.css']
      }
    },

    // Minify css
    cssmin: {
      dist: {
        src: 'dist/lintel.css',
        dest: 'dist/lintel.min.css'
      }
    },

    // Lint css
    csslint: {
      options: {
        csslintrc: '.csslintrc'
      },
      dist: {
        src: ['dist/lintel.css']
      }
    }

  });

  grunt.registerTask('compile', ['injector', 'sass', 'autoprefixer', 'cssmin']);

  grunt.registerTask('test', ['compile', 'csslint']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['test']);

};
