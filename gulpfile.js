var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var stylus = require('gulp-stylus');
var watch = require('gulp-watch');
var livereload = require('gulp-livereload')

gulp.task('default',['nodemon','watch']);

gulp.task('nodemon',function(){
	nodemon({
		script : 'server.js',
		env: {
			'PORT':3000
		}
	});
});

gulp.task('stylus',function(){
	gulp.src('./public/styles/*.styl')
	.pipe(stylus())
	.pipe(gulp.dest('./public/styles/'))
	.pipe(livereload());
})

gulp.task('watch',function(){
	livereload.listen();
	gulp.watch('./public/styles/*.styl',['stylus']);
});
