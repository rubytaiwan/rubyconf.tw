var gulp         = require('gulp'),
    sass         = require('gulp-ruby-sass'),
    cleanCSS     = require('gulp-clean-css'),
    browserSync  = require('browser-sync'),
    reload       = browserSync.reload,
    argv         = require('yargs').argv,
    del          = require('del');
    
var $ = require('gulp-load-plugins')({
  pattern: ['gulp-*', 'gulp.*'],
  replaceString: /\bgulp[\-.]/
});

gulp.task('styles', function() {  
  return sass('./src/sass/**/*.{scss,sass}', { style: 'expanded' })
    .pipe($.plumber())
    .pipe($.autoprefixer({
      browsers: ['last 2 versions', 'ie >= 9']
    }))
    .pipe($.rename({suffix: '.min'}))
    .pipe(cleanCSS({
      compatibility: 'ie8',
      keepBreaks: true
    }))
    .pipe(gulp.dest('./stylesheets'));
});

gulp.task('view', function() {
  return gulp.src('./src/*.jade')
    .pipe($.plumber())
    .pipe($.pug({
      pretty: true
    }))
    .pipe(gulp.dest('.'));
});

gulp.task('scripts', function() {  
  return gulp.src('src/scripts/*.js')
    .pipe($.uglify())
    .pipe($.rename({suffix: '.min'}))
    .pipe(gulp.dest('./scripts'));
});

gulp.task('clean', function() {  
  return del(['./stylesheets/*.css', './scripts/*.js', './*html']);
});

gulp.task('browser-sync', function() {
  browserSync({
    open: !!argv.open,
    notify: !!argv.notify,
    server: {
      baseDir: "."
    }
  });
});

gulp.task('build', ['styles', 'view', 'scripts']);

gulp.task('serve', ['clean', 'build', 'browser-sync'], function () {
  gulp.watch('src/sass/**/*.{scss,sass}',['styles', reload]);
  gulp.watch('src/scripts/**/*.js',['scripts', reload]);
  gulp.watch('src/*.jade',['view', reload]);
});

gulp.task('default', ['serve']);