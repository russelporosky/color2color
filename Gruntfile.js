/*!
 * colorcolor Gruntfile
 * http://metaloha.github.io/color2color/
 */

'use strict';

var fileLocations = {
	js: {
		src: './src',
		dist: './dist'
	},
	build: './build',
	tests: './tests'
};

module.exports = function(grunt) {
	// Force use of Unix newlines
	grunt.util.linefeed = '\n';

	// Load NPM Tasks
	require('jit-grunt')(grunt);

	grunt.initConfig({
		fileLocations: fileLocations,

		// Load the Package file so we can reference its info if necessary
		pkg: grunt.file.readJSON('package.json'),

		jshint: {
			options: {
				esversion: '6'
			},
			files: [
				'<%= fileLocations.js.src %>/**/*.js'
			]
		},

		browserify: {
			options: {
				transform: [
					["babelify", {
						presets: ["es2015"]
					}]
				]
			},
			all: {
				files: {
					'<%= fileLocations.build %>/<%= pkg.name %>.js': '<%= fileLocations.js.src %>/<%= pkg.name %>.js'
				}
			}
		},

		uglify: {
			options: {
				report: 'min',
				preserveComments: false,
				sourceMap: true,
				sourceMapIncludeSources: true,
				screwIE8: false,
				mangle: {
					except: ['colorcolor']
				}
			},
			all: {
				files: {
					'<%= fileLocations.js.dist %>/<%= pkg.name %>.min.js': '<%= fileLocations.build %>/<%= pkg.name %>.js'
				}
			}
		},

		mochaTest: {
			test: {
				options: {
					reporter: 'spec',
					quiet: false,
					clearRequireCache: true
				},
				src: ['<%= fileLocations.tests %>/**/*.js']
			}
		},

		watch: {
			js: {
				files: [
					'<%= fileLocations.js.src %>/**/*.js'
				],
				tasks: [
					'jshint',
					'browserify',
					'uglify',
					'mochaTest'
				]
			},
			configFiles: {
				files: [
					'Gruntfile.js',
					'package.json'
				],
				options: {
					reload: true
				},
				tasks: [
					'jshint',
					'browserify',
					'uglify',
					'mochaTest',
					'watch'
				]
			},
			testFiles: {
				files: '<%= fileLocations.tests %>/**/*.js',
				tasks: [
					'mochaTest',
					'watch'
				]
			}
		}
	});

	// TASKS =====================================/
	grunt.registerTask('default', [
		'jshint',
		'browserify',
		'uglify',
		'mochaTest'
	]);
	grunt.registerTask('dev', [
		'jshint',
		'newer:browserify',
		'newer:uglify',
		'mochaTest',
		'watch'
	]);
	grunt.registerTask('test', [
		'mochaTest'
	]);
};
