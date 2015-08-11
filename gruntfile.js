module.exports = function(grunt)  {
	
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
		
		watch: {
			options: { livereload: true },
			scripts: {
				files: ['./components/js/*.js'],
				tasks: ['uglify']
			},
			
			html: {
				files: ['*.html']
			}, // html
			
			sass: {
				files: ['./components/sass/*.scss'],
				tasks: ['compass:dev']
			}, // sass
			
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