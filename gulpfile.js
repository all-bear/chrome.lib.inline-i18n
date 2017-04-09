const gulp = require('gulp');
const babel = require('gulp-babel');
const minify = require('gulp-minify');

gulp.task('default', () => {
  return gulp.src('src/**/*.js')
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(minify())
    .pipe(gulp.dest('dist'));
});