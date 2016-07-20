'use strict'

var gulp = require('gulp'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  rename = require('gulp-rename'),
    maps = require('gulp-sourcemaps'),
minifyCss = require('gulp-minify-css'),
      es = require('event-stream'),
      watch = require('gulp-watch');


gulp.task('concatScripts',function(){
  var together = gulp.src([
    'public/js/jquery.js',
    'public/js/jquery-migrate.min.js',
    'public/js/jquery.themepunch.tools.min.js',
    'public/js/jquery.themepunch.revolution.min.js',
    'public/js/preloader.min.js',
    'public/js/easing.min.js',
    'public/js/imagesloaded.pkgd.min.js',
    'public/js/bootstrap.min.js',
    'public/js/superfish-1.7.4.min.js',
    'public/js/jquery.appear.min.js',
    'public/js/script.js',
    'public/js/jquery.parallax.js',
    'public/js/jquery.countTo.min.js',
    'public/js/isotope.pkgd.min.js',
    'public/js/jquery.magnific-popup.min.js',
    'public/js/jquery.touchSwipe.min.js',
    'public/js/jquery.carouFredSel.min.js'
    ])
  .pipe(concat('app.js'));

  var js = gulp.src('public/js/app.js');

  return es.merge(together, js)
    .pipe(maps.init())
    .pipe(uglify())
    .pipe(maps.write('./'))
    .pipe(gulp.dest('public/js/'))
});

gulp.task('concatCss', function(){
  var together = gulp.src([
    'public/css/settings.css',
    'public/css/elegant-icon.css',
    'public/css/font-awesome.min.css',
    'public/css/style.css',
    'public/css/shop.css',
    'public/css/page.css',
    'public/css/preloader.css',
    'public/css/magnific-popup.css'
    ])
  .pipe(concat('main.min.css'));

  var css = gulp.src('public/css/main.min.css');

  return es.merge(together, css)
    .pipe(maps.init())
    .pipe(minifyCss())
    .pipe(maps.write('./'))
    .pipe(gulp.dest('public/css/'))
});

gulp.task('default', ['concatScripts', 'concatCss'])

gulp.task('watch', function() {
    gulp.watch('public/css/*.css', ['concatCss'])
});
