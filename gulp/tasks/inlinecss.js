var gulp  = require('gulp');
var config = require('../config');
var browserSync = require('browser-sync');
var inlineCss = require('gulp-inline-css');
reload = browserSync.reload;

gulp.task('inlinecss', function () {
	console.log('blabla');
    gulp.src(config.dest.root+'*.html')
        .pipe(inlineCss())
        .pipe(gulp.dest(config.dest.root))
        // .pipe(reload({stream: true}));
});
