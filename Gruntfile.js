/*global module:false*/
module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        concat: {
            options: {
                process: function(src, filepath) {
                    return '\n//! Source: ' + filepath + '\n\n' + src;
                }
            },
            "ui-infra": {
                files: {
                    "ui-infra.js": ["src/*.js"]
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    
    grunt.registerTask('default', ['concat']);

};
