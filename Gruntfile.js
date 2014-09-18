module.exports = function(grunt) {
    "use strict";
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        jshint: {
            options: {
                jshintrc: true
            },
            grunt: "Gruntfile.js",
            source: "src/**/*.js"
        },
        jscs: {
            src: "src/*.js",
            options: {
                config: ".jscsrc"
            }
        }
    });

    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-jscs");

    grunt.registerTask("default", ["jshint", "jscs"]);
};
