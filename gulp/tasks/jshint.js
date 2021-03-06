var gulp = require('gulp');
var config = require('../config').jshint;

gulp.task('jshint', function() {
    return gulp.src(config.src)
        .pipe(eslint())
        .pipe(eslint.format())
        .on('error', function() {
            beep();
        });
});
