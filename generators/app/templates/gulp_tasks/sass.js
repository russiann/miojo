var gulp        = require('gulp'),
    plumber     = require('gulp-plumber'),
    concat      = require('gulp-concat'),
    sass        = require('gulp-sass'),
    minifyCss   = require('gulp-minify-css'),
    reload      = require('browser-sync').get('app').reload;

gulp.task('sass', function() {
  return gulp.src(gulp.paths.sass)
    .pipe(plumber())
    .pipe(concat('application.min.css'))
    .pipe(sass())
    .pipe(minifyCss({ keepSpecialComments: 0 }))
    .pipe(gulp.dest(gulp.paths.dist))
    .pipe(reload({stream:true}));
});
