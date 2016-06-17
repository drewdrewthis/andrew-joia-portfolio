var gulp = require('gulp'),
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	jshint = require('gulp-jshint'),
	uglify = require('gulp-uglify'),
	imagemin = require('gulp-imagemin'),
	rename = require('gulp-rename'),
	concat = require('gulp-concat');
// var	gulpPath = require('gulp-path');
// var notify = require('gulp-notify');

// Set base paths

var paths = {
        images: './src/assets/images/**/*.*',
        scripts: 'src/assets/scripts/**/*.js',
        styles: './src/assets/styles/**/*.scss'
    };

gulp.task('styles', function() {
  return gulp.src('src/assets/styles/**/*.scss')
	.pipe(sass({ style: 'expanded' }))
	.pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
	.pipe(gulp.dest('dist/styles'));
	//.pipe(notify({ message: 'Styles task complete' }));
});

// Concatenate & Minify JS
gulp.task('scripts', function() {
	return gulp.src(paths.scripts)
		.pipe(concat('main.js'))
		.pipe(gulp.dest('./dist/scripts'))
		.pipe(rename('main.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('dist/scripts'));
});

// Images
gulp.task('images', function() {
  return gulp.src(paths.images)
    //.pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
    .pipe(gulp.dest('dist/images'));
    //.pipe(notify({ message: 'Images task complete' }));
});

// Watch
gulp.task('watch', function() {

  gulp.watch(paths.styles, ['styles']);
  gulp.watch(paths.scripts, ['scripts']);
  gulp.watch(paths.images, ['images']);

  // Watch any files in dist/, reload on change
  gulp.watch(['css/**','js/**','img/**','*.html']).on('change', function(file) {
	server.changed(file.path);
  });

});

gulp.task('default', ['styles', 'scripts','images']);