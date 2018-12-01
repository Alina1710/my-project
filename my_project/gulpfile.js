var gulp = require('gulp');
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    pug = require('gulp-pug');

gulp.task('sass', function(){
   return gulp.src('app/sass/main.sass')
    .pipe(sass())
    .pipe(gulp.dest('app/css'))
});

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: 'app'
            },
        notify: false
        });
});    

gulp.task('pug', function() {
  return gulp.src("app/*.pug")
      .pipe(pug())
      .pipe(gulp.dest("./app"))
      .pipe(browserSync.stream());
});

gulp.task('build', [
  'fonts', 
  'img',
  'sass',
  'scrpts'

]);

gulp.task('watch', ['browser-sync', 'sass', 'pug'], function() {
    gulp.watch('app/sass/**/*.sass', ['sass']);
    gulp.watch('app/*.html', browserSync.reload);
    gulp.watch('app/js/**/*.js', browserSync.reload);
});