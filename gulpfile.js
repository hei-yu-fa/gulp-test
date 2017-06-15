'use strict'
let gulp = require('gulp');
let babel = require('gulp-babel');
// 在 shell 中执行一个命令
let exec = require('child_process').exec;

var watcher = gulp.watch('es6/*.js', ['hello']);

gulp.task('task-name',function(){
	// stuff here
});

// hello
gulp.task('hello',function(){
	console.log('hello gulp!');
	exec('npm run test')
});

gulp.task('default',function(){
	gulp.src('es6/*.js')
		.pipe(babel({
			presets: ['es2015']
		}))
		.pipe(gulp.dest('es5'));
});