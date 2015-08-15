module.exports = function(grunt) {

    // Load Grunt tasks declared in the package.json file
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    // Configure Grunt
    grunt.initConfig({

        // grunt-express will serve the files from the folders listed in `bases`
        express: {
            all: {
                options: {
                    port: 9000,
                    hostname: "0.0.0.0",
                    bases: [__dirname],
                    livereload: false
                }
            }
        },

        // grunt-watch will monitor the projects files
        watch: {
            all: {
                files: 'demo/index.html',
                options: {
                    livereload: false
                }
            }
        },

        // grunt-open will open your browser at the project's URL
        open: {
            develop: {
                // Gets the port from the connect configuration
                path: 'http://localhost:<%= express.all.options.port%>/demo/'
            },
            build: {
                path: 'http://localhost:<%= express.all.options.port%>/build/'
            }
        },

        // build with vulcanize
        vulcanize: {
            default: {
                options: {},
                files: {
                    'build/index.html': 'demo/index.html'
                }
            }
        }

    });

    // Creates the `server` task
    grunt.registerTask('default', [
        'express',
        'open:develop',
        'watch'
    ]);

    // Creates the `build` task
    grunt.registerTask('build', [
        'vulcanize',
        'express',
        'open:build',
        'watch'
    ]);

};