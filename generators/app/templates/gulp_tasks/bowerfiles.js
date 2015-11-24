var gulp        = require('gulp'),
    concat      = require('gulp-concat'),
    bowerFiles  = require('main-bower-files')
    reload      = require('browser-sync').get('app').reload;;

gulp.task('bower-files', function() {
  gulp.src(bowerFiles(), {base: 'bower_components'})
    .pipe(gulp.dest(gulp.paths.dist+'/libs'))
    .pipe(reload({stream:true}));
});
