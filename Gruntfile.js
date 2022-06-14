module.exports = function (grunt) {
    grunt.initConfig({

        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: [
				'assets/js/vendors/jquery.min.js',
				'assets/js/vendors/popper.min.js',
				'assets/js/vendors/bootstrap.bundle.min.js',
				'assets/js/vendors/bootstrap.min.js',
				'assets/js/vendors/wow.min.js',
				'assets/js/vendors/owl.carousel.min.js',
				'assets/js/vendors/jquery.validate.min.js',
				'assets/js/vendors/main.js'
				],
                dest: 'assets/js/built.min.js'
            }
        },

		cssmin: {
			options: {
				mergeIntoShorthands: false,
				roundingPrecision: -1
			},
			target: {
				files: {
					'assets/css/built.min.css': [
						'assets/css/bootstrap.min.css',
						'assets/css/animate.css',
						'assets/css/owl.carousel.min.css',
						'assets/css/font-awesome.min.css',
						'assets/css/material-design-iconic-font.min.css',
						'assets/css/style.css',
						'assets/css/responsive.css',
					]
				}
			}
		},

        uglify: {
            dist: {
                files: {
                    'assets/js/built.min.js': ['assets/js/built.min.js']
                }
            }
        },

        jshint: {
            all: ['assets/js/main.js']
        }
    });

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');


	grunt.registerTask('default', ['jshint', 'concat', 'uglify', 'cssmin']);


};