module.exports = function (grunt) {
    'use strict';
    // Project configuration
    grunt.initConfig({
      karma: {
				unit: {
					configFile: 'test/karma.conf.js'
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
		grunt.loadNpmTasks('grunt-karma');
		grunt.loadNpmTasks('grunt-contrib-uglify');
	
    // Default task
		grunt.registerTask('test', ['karma']);
    grunt.registerTask('build', ['uglify']);
};

