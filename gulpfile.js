// *************************************
//
//   Gulpfile
//
// *************************************

// -------------------------------------
//   Requires
// -------------------------------------

var gulp = require('gulp');
var scss = require('gulp-scss');
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');

// -------------------------------------
//   Task: Compile
// -------------------------------------

gulp.task('compile', function() {
  gulp.src('application.scss')
    .pipe(scss())
    .pipe(gulp.dest('dist'));
});

// -------------------------------------
//   Task: Build
// -------------------------------------

gulp.task('build', function() {
  gulp.src('dist/application.css')
    .pipe(rename('application.min.css'))
    .pipe(cleanCSS())
    .pipe(gulp.dest('dist'));
});
