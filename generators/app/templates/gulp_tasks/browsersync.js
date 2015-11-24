var gulp          = require('gulp'),
    browserSync   = require('browser-sync'),
    watch         = require('gulp-watch');

gulp.task('browsersync', function () {

  browserSync.get('app').init({
    server: {
      baseDir: "./"+gulp.paths.dist
    }
  });

  watch('source/index.jade', function () { return gulp.start('index'); });
  watch('source/**/*.js', function () { return gulp.start('concat'); });
  watch('source/**/*.jade', function (file) { return gulp.jadeTask(file.history); });
  watch('source/**/*.scss', function () { return gulp.start('sass'); });
  watch('bower_components/**', function () { return gulp.start('bower-files'); });
  watch('source/assets/images/**/*', function () { return gulp.start('images'); });
  watch('source/assets/fonts/**/*', function () { return gulp.start('fonts'); });

});
