module.exports = function(grunt) {
    "use strict";
    var key, browsers = [
        // Windows 7
        { browserName: "chrome", version: "37", platform: "Windows 7" },
        { browserName: "firefox", version: "32", platform: "Windows 7" },
        { browserName: "internet explorer", version: "9", platform: "Windows 7" },
        { browserName: "internet explorer", version: "10", platform: "Windows 7" },
        { browserName: "internet explorer", version: "11", platform: "Windows 7" },
        // Windows 8.1
        { browserName: "chrome", version: "37", platform: "Windows 8.1" },
        { browserName: "firefox", version: "32", platform: "Windows 8.1" },
        { browserName: "internet explorer", version: "11", platform: "Windows 8.1" },
        // Mac
        { browserName: "chrome", version: "36", platform: "OS X 10.9" },
        { browserName: "firefox", version: "32", platform: "OS X 10.9" },
        { browserName: "safari", version: "6", platform: "OS X 10.8" },
        { browserName: "safari", version: "7", platform: "OS X 10.9" },
        // Linux
        { browserName: "chrome", version: "36", platform: "Linux" },
        { browserName: "firefox", version: "32", platform: "Linux" },
        // iOS
        { browserName: "iphone", version: "7.1", platform: "OS X 10.9" },
        { browserName: "ipad", version: "7.1", platform: "OS X 10.9" },
        // Android
        { browserName: "android", version: "4.3", platform: "Linux" },
        { browserName: "android", version: "4.4", platform: "Linux" }
    ];

    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        qunit: {
            all: "test/index.html"
        },
        jshint: {
            options: {
                jshintrc: true
            },
            grunt: "Gruntfile.js",
            src: "src/**/*.js",
            tests: "test/**/*.js"
        },
        jscs: {
            src: "src/*.js",
            gruntfile: "Gruntfile.js",
            tests: "test/*.js",
            options: {
                config: ".jscsrc"
            }
        },
        jsonlint: {
            pkg: {
                src: [ "package.json" ]
            }
        },
        uglify: {
            options: {
                banner: "/*! <%= pkg.name %> v<%= pkg.version %> | <%= pkg.license %> */\n"
            },
            build: {
                src: "src/broiler.js",
                dest: "build/broiler-<%= pkg.version %>.min.js"
            }
        },
        connect: {
            server: {
                options: {
                    base: "",
                    port: 9999
                }
            }
        },
        "saucelabs-qunit": {
            all: {
                options: {
                    urls: [ "http://127.0.0.1:9999/test/index.html" ],
                    tunnelTimeout: 5,
                    build: process.env.TRAVIS_JOB_ID,
                    concurrency: 3,
                    browsers: browsers,
                    testname: "qunit tests",
                    tags: [ "master" ]
                }
            }
        },
        watch: {}
    });

    // Loading dependencies
    for (key in grunt.file.readJSON("package.json").devDependencies) {
        if (key !== "grunt" && key.indexOf("grunt") === 0) {
            grunt.loadNpmTasks(key);
        }
    }

    grunt.registerTask("default", [ "jshint", "jscs", "jsonlint", "qunit", "uglify" ]);
    grunt.registerTask("dev", [ "connect", "watch" ]);
    grunt.registerTask("saucelabs", [ "connect", "saucelabs-qunit" ]);
    grunt.registerTask("ci", [ "jshint", "jscs", "jsonlint", "qunit", "saucelabs" ]);
};
