var gulp        = require('gulp');
var browserSync = require('browser-sync');
var sass        = require('gulp-sass');
var reload      = browserSync.reload;

gulp.task('serve', ['sass'], function() {
    browserSync({
        server: "./app"
    });
    gulp.watch("app/assets/scss/**/*.scss", ['sass']);
    gulp.watch("app/**/*.html").on('change', reload);
    gulp.watch("app/assets/js/*.js").on('change', reload);
});

gulp.task('sass', function() {
    return gulp.src("app/assets/scss/**/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("app/assets/css"))
        .pipe(reload({stream: true}));
});

gulp.task('default', ['serve']);
