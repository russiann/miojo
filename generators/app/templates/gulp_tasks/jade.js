var gulp        = require('gulp'),
    plumber     = require('gulp-plumber'),
    jade        = require('gulp-jade'),
    reload      = require('browser-sync').get('app').reload,
    flatten     = require('gulp-flatten');

gulp.jadeTask = function (filePath) {
  return gulp.src(filePath)
    .pipe(plumber())
    .pipe(jade())
    .pipe(flatten())
    .pipe(gulp.dest(gulp.paths.dist))
    .pipe(reload({stream:true}));
};

gulp.task('jade', function () {
  return gulp.jadeTask(gulp.paths.components_views);
});
