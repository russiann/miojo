var gulp          = require('gulp'),
    plumber       = require('gulp-plumber'),
    concat        = require('gulp-concat')
    ngAnnotate    = require('gulp-ng-annotate');
    reload        = require('browser-sync').get('app').reload;

gulp.task('concat', function() {
  return gulp.src(gulp.paths.scripts)
    .pipe(plumber())
    .pipe(concat('application.js'))
    .pipe(ngAnnotate())
    .pipe(gulp.dest(gulp.paths.dist))
    .pipe(reload({stream:true}));
});
