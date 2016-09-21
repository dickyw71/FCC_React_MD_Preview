var gulp         = require('gulp');
var browserSync  = require('browser-sync');
var config       = require('../config');
var uglify		 = require('gulp-uglify');
var minifyCss	 = require('gulp-minify-css');
var rename 		 = require('gulp-rename');


gulp.task('uglify', function() {
  return gulp.src(config.clientDir + '/**/*.js')
    .pipe(uglify())
    .pipe(gulp.dest(config.buildDir+'/js/'));
});


gulp.task('minify-css', function() {
  return gulp.src(config.clientDir + '/**/*.css')
    .pipe(minifyCss({compatibility: 'ie9'}))
	.pipe(rename('screeen-min.css'))
    .pipe(gulp.dest(config.buildDir+'/css/'));
});


gulp.task('production', ['minify-css', 'uglify'], function(){
    global.isBuilding = false;
});
