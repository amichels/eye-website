'use strict';
 
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    cssnano = require('gulp-cssnano'),
    rename = require('gulp-rename'),
    livereload = require('gulp-livereload'),
    handlebars = require('gulp-hb');

// Styles
gulp.task('styles', function() {
  return gulp.src('./src/sass/**/*.scss')
    .pipe(sass())
    .pipe(autoprefixer('last 2 version'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(cssnano())
    .pipe(gulp.dest('./src/css'));
});

gulp.task('html', function() {
  return gulp.src('./app/templates/index.hbs')
    .pipe(handlebars({
        partials: './app/templates/partials/**/*.hbs'
    }))
    .pipe(rename('index.html'))
    .pipe(gulp.dest('./'));
});
 
gulp.task('watch', function () {
  gulp.watch('./src/sass/**/*.scss', ['styles']);

  gulp.watch('./app/templates/**/*.hbs', ['html']);

  // Create LiveReload server
  livereload.listen();

});

gulp.task('default', function() {
  gulp.start('styles','html');
});