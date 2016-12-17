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

// -------------------------------------
//   Task: Compile
// -------------------------------------

gulp.task('compile', function() {
  gulp.src('application.scss')
    .pipe(scss())
    .pipe(gulp.dest('dist'));
});
