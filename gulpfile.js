'use strict';
 
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    cssnano = require('gulp-cssnano'),
    rename = require('gulp-rename'),
    livereload = require('gulp-livereload'),
    handlebars = require('gulp-hb'),
    fs = require("fs"),
    browserify = require("browserify"),
    babelify = require("babelify");

// CSS
gulp.task('css', function() {
  return gulp.src('./src/sass/**/*.scss')
    .pipe(sass())
    .pipe(autoprefixer('last 2 version'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(cssnano())
    .pipe(gulp.dest('./src/css'));
});

// JS
gulp.task('js', function() {
  return browserify("./src/src-js/app.js")
    .transform("babelify", {presets: ["es2015"]})
    .bundle()
    .pipe(fs.createWriteStream("./src/js/app.min.js"));
});

// HTML
gulp.task('html', function() {
  return gulp.src('./app/templates/index.hbs')
    .pipe(handlebars({
        partials: './app/templates/partials/**/*.hbs'
    }))
    .pipe(rename('index.html'))
    .pipe(gulp.dest('./'));
});
 
gulp.task('watch', function () {
  gulp.watch('./src/sass/**/*.scss', ['css']);

  gulp.watch('./app/templates/**/*.hbs', ['html']);

  gulp.watch(['./src/src-js/**/*.js'],['js'])

  // Create LiveReload server
  livereload.listen();

});

gulp.task('default', function() {
  gulp.start('css','html','js');
});