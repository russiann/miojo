var gulp    = require('gulp'),
    reload  = require('browser-sync').get('app').reload;

gulp.task('images', function() {
  gulp.src(gulp.paths.images)
    .pipe(gulp.dest(gulp.paths.dist))
    .pipe(reload({stream:true}));
});

gulp.task('fonts', function() {
  gulp.src(gulp.paths.fonts)
    .pipe(gulp.dest(gulp.paths.dist))
    .pipe(reload({stream:true}));
});

gulp.task('assets', ['images','fonts']);
