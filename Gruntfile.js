/*
 * lintel
 * https://github.com/lintelio/lintel
 *
 * Copyright (c) 2014 Marius Craciunoiu
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {
  var lintel = {
    docs: 'docs',
    docsCompiled: '.docs',
    dist: 'dist'
  };

  // load all npm grunt tasks
  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({
    lintel: lintel,

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
          '<%= lintel.dist %>/lintel.css': 'sass/lintel.scss'
        }
      }
    },

    // Autoprefix sass
    autoprefixer: {
      dist: {
        src: ['<%= lintel.dist %>/lintel.css']
      }
    },

    // Minify css
    cssmin: {
      // TODO: sourcemap
      dist: {
        src: '<%= lintel.dist %>/lintel.css',
        dest: '<%= lintel.dist %>/lintel.min.css'
      }
    },

    // Lint css
    csslint: {
      options: {
        csslintrc: '.csslintrc'
      },
      dist: {
        src: ['<%= lintel.dist %>/lintel.css']
      }
    },

    // Compile docs
    jekyll: {
      options: {
        bundleExec: true,
        src: '<%= lintel.docs %>'
      },
      docs: {
        options: {
          dest: '<%= lintel.docsCompiled %>'
        }
      }
    },

    // Serve docs
    connect: {
      docs: {
        options: {
          base: [
            '<%= lintel.dist %>',
            '<%= lintel.docsCompiled %>'
          ],
          livereload: true,
          port: 4000
        }
      }
    },

    // Watch for changes
    watch: {
      sass: {
        files: [
          'sass/**/*.scss'
        ],
        tasks: ['test']
      },
      docs: {
        files: [
          '<%= lintel.docs %>/**/*.html',
          '<%= lintel.docs %>/**/*.md'
        ],
        tasks: ['jekyll:docs']
      },
      livereload: {
        files: [
          '<%= lintel.dist %>/**/*.css',
          '<%= lintel.docsCompiled %>/**/*.html'
        ],
        options: {
          livereload: true
        }
      },
    }

  });

  grunt.registerTask('compile', ['injector', 'sass', 'autoprefixer', 'cssmin']);

  grunt.registerTask('docs', ['jekyll:docs', 'connect:docs']);

  grunt.registerTask('test', ['compile', 'csslint']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['test', 'docs', 'watch']);

};
