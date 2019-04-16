'use strict';

import gulp from 'gulp';
import sass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';
import cssmin from 'gulp-cssmin';
import rename from 'gulp-rename';

const devFolderPath = "website/";
const distFolderPath = "dist/";
const paths = {
  src: `${devFolderPath}/sass/*.scss`,
  dest: `${distFolderPath}/css/`
};

gulp.task('cp', () =>{
	return gulp.src("node_modules/normalize.css/normalize.css")
	.pipe(gulp.dest("website/sass/"))
});
gulp.task('styles', () => {
  return gulp.src(paths.src)
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(cssmin())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest(paths.dest));
});

gulp.task('watch', () =>{
  gulp.watch(paths.src, gulp.series('styles'));
});

gulp.task('build', () => {
  gulp.start('styles');	
});
