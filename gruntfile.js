module.exports = function(grunt)  {
	
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-compass');
	
	grunt.initConfig({
		uglify: {
			my_target: {
				files: {
					'./js/script.js': [ 
					'./components/js/*.js']
				} // files
			} // my_target
		}, // uglify
		
		sass: {
			dev: {
				options: {
					includePaths: require('node-bourbon').includePaths,
					includePaths: require('node-neat').includePaths,
					outputStyle: 'expanded',
				},
				files: {
					'css/bourbon-styles.css': 'components/bourbon_sass/bourbon-styles.scss'
				},
			},
		},
		
		watch: {
			options: { livereload: true },
			grunt: { files: ['gruntfile.js'] },
			
			scripts: {
				files: ['./components/js/*.js'],
				tasks: ['uglify']
			},
			
			html: {
				files: ['*.html']
			}, // html
			
			bourbon_sass: {
				files: ['./components/bourbon_sass/*.scss'],
				tasks: ['sass:dev']
			}, // bourbon_sass
			
			compass_sass: {
				files: ['./components/compass_sass/*.scss'],
				tasks: ['compass:dev']
			}, // compass
			
		}, // watch
		
		compass: {
			dev: {
				options: {
					config: 'config.rb'
				} // options
			} // dev
		}, // compass
		
		
		
	}); // initConfig
	
	grunt.registerTask('default', 'watch');
} // exports