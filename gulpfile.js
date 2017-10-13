const gulp = require('gulp');

const babel = require('gulp-babel');
gulp.task('default',function(){

	gulp.src("src/js/*.js")
		.pipe(babel())
		.pipe(gulp.dest("src/js_es5"));


});