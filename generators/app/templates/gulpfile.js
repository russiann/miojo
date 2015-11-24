var gulp        = require('gulp'),
    plumber     = require('gulp-plumber'),
    browserSync = require('browser-sync')
    requireDir  = require('require-dir');
    gulpsync    = require('gulp-sync')(gulp);

browserSync.create('app');

gulp.paths = {
  index_view: 'source/index.jade',
  components_views: [
    'source/components/**/*.jade',
    'source/shared/**/*.jade'
  ],
  sass: 'source/**/*.scss',
  scripts: [
    'source/*.js',
    'source/shared/**/*.module.js',
    'source/components/**/*.module.js',
    'source/shared/**/*.services.js',
    'source/components/**/*.services.js',
    'source/shared/**/*.controller.js',
    'source/components/**/*.controller.js'
  ],

  fonts: 'source/assets/fonts/',
  images: 'source/assets/images/',
  libs: 'www/libs',
  dist: 'www'
};

requireDir('gulp_tasks');

gulp.task('compile', gulpsync.sync(['concat','index','jade','sass','bower-files','assets']));
gulp.task('serve', gulpsync.sync(['compile','browsersync']));

gulp.task('default', ['serve']);
