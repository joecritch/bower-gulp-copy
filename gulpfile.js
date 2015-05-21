var gulp = require('gulp');
var del = require('del');

var minifiedBowerFiles = [
  'bower_components/**/*min.js',
  'bower_components/**/*min.css'
];

var buildFolder = 'build';

gulp.task('clean', function(cb) {
  del([buildFolder], cb);
});

gulp.task('bower_copy', ['clean'], function(cb) {
  return gulp.src(minifiedBowerFiles)
  .pipe(gulp.dest(buildFolder));
});

gulp.task('default', ['bower_copy']);