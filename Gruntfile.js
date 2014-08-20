module.exports = function (grunt) {
    'use strict';
    // Project configuration
    grunt.initConfig({
      karma: {
				unit: {
					configFile: 'text/karma.conf.js',
					options: {
						files: ['test/specs/**/*.js']
					}
				}
			},
			uglify: {
				options: {
					mangle: false
				},
				my_target: {
					files: {
						'dist/color2color.min.js': ['color2color.js']
					}
				}
			}
    });

    // These plugins provide necessary tasks
   	//karma-test
		grunt.loadNpmTasks('grunt-karma');
		//clear
		//minify
	
    // Default task
		grunt.registerTask('test', ['karma']);
    grunt.registerTask('default', ['clear', 'uglify']);
};

