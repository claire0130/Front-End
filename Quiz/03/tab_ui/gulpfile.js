'use strict';

var config, gulp, sass, autoprefixer, sourcemaps, g_if, uglify, browserSync;
    config = require('./gulp.config');
    gulp = require('gulp');
    sass = require('gulp-sass');
    autoprefixer = require('gulp-autoprefixer');
    sourcemaps = require('gulp-sourcemaps');
    g_if = require('gulp-if');
    uglify = require("gulp-uglify");
    browserSync = require('browser-sync').create();

    // gulp 기본 수행할 일(task) 등록
    gulp.task('default', [
      'compile:css',
      'watch',
      'uglify'
    ]);

    gulp.task('watch', function() {
      gulp.watch(config.sass.src, ['compile:css']);
    });

    // uglify 업무 등록
    gulp.task("uglify", function(){
      return gulp.src("src/js/*.js")
                 .pipe(uglify())
                 .pipe(gulp.dest("dist/js"));
    });

    // Sass 업무 등록
    gulp.task('compile:css', function() {
        return gulp.src(config.sass.src)
                   .pipe( g_if(config.sass.sourcemaps.use, sourcemaps.init() ) )
                   .pipe( sass( config.sass.options ).on('error', sass.logError) )
                   .pipe( autoprefixer() )
                   .pipe( g_if(config.sass.sourcemaps.use, sourcemaps.write(config.sass.sourcemaps.location) ) )
                   .pipe( gulp.dest(config.sass.dest) );
    });