// *************************************
//
//   Gulpfile
//
// *************************************

// -------------------------------------
//   Requires
// -------------------------------------

var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var scss = require('gulp-scss');
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');

// -------------------------------------
//   Task: Compile
// -------------------------------------

gulp.task('compile', function() {
  gulp.src('application.scss')
    .pipe(scss())
    .pipe(autoprefixer({
      browsers : ['last 2 versions'],
      cascade : false
    }))
    .pipe(rename('spellbook.css'))
    .pipe(gulp.dest('dist'));
});

// -------------------------------------
//   Task: Build
// -------------------------------------

gulp.task('build', function() {
  gulp.src('dist/spellbook.css')
    .pipe(rename('spellbook.min.css'))
    .pipe(cleanCSS())
    .pipe(gulp.dest('dist'));
});
