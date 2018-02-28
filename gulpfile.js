(function () {
	'use strict';
}());

var gulp = require('gulp'),
	prefix = require('gulp-autoprefixer'),
	sass = require('gulp-sass'),
	minifyCSS = require('gulp-minify-css'),
	sourcemaps  = require('gulp-sourcemaps'),
	rename  = require('gulp-rename');

var paths = {
  dist: './dist/',
  sass: './src/scss/',
  css: './dist/css/',
	};

/* SCSS
==============================================*/
gulp.task('sass', function () {
	return gulp.src(paths.sass + 'styles.scss')
		.pipe(sass())
		.pipe(sourcemaps.init())
		.pipe(minifyCSS())
		.pipe(prefix())
		.pipe(rename({
			prefix: 'demo-'
		}))
		.pipe(gulp.dest(paths.css));
});

/* Build
==============================================*/
gulp.task('build', ['sass']);

/* Compile
==============================================*/
gulp.task('default', ['build']);