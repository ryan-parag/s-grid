'use strict';

var gulp = require('gulp'),
	prefix = require('gulp-autoprefixer'),
	sass = require('gulp-sass'),
	minifyCSS = require('gulp-minify-css'),
	sourcemaps  = require('gulp-sourcemaps'),
	rename  = require('gulp-rename'),
 pug = require('gulp-pug');


var paths = {
  dist: './dist/',
  sass: './src/scss/',
  css: './dist/css/',
		pug: './src/views/*.pug'
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
			prefix: 'lido-'
		}))
		.pipe(gulp.dest(paths.css));
});


/* DEMO SCSS
==============================================*/
gulp.task('demo', function () {
	return gulp.src(paths.sass + 'demo.scss')
		.pipe(sass())
		.pipe(sourcemaps.init())
		.pipe(minifyCSS())
		.pipe(prefix())
		.pipe(rename({
			prefix: 'styles-'
		}))
		.pipe(gulp.dest(paths.css));
});

/* PUG
==============================================*/
gulp.task('pug', function () {
  return gulp.src(paths.pug)
  .pipe(pug({}))
.pipe(gulp.dest(paths.dist));
});

/* Build
==============================================*/
gulp.task('build', ['sass', 'pug', 'demo']);

/* Compile
==============================================*/
gulp.task('default', ['build']);