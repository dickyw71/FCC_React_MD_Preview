var gulp = require('gulp');

gulp.task('build', ['browserify', 'sass', 'assets', 'templates', 'production'], function(){
    global.isBuilding = false;
});
