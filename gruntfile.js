module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.JSON'),
        less: {
            development: {
                files: {
                    './dev/styles/main.css' : './src/styles/main.less'
                }
            },
            production: {
                options: {
                    compress: true,
                },
                files: {
                    './build/styles/main.min.css' : './src/styles/main.less'
                }
            }
        },
        uglify: {
            target: {
                files: {
                    './build/scripts/main.min.js' : './src/scripts/main.js'
                }
            }
        }
    })

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-uglify')

    grunt.registerTask('default', ['less', 'uglify']);
}


