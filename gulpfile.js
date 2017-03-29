var
// modules
    gulp = require('gulp'),


    templateCache = require('gulp-angular-templatecache'),
    devBuild = (process.env.NODE_ENV !== 'production'),

    // folders
    folder = {
        src: 'app/',
        build: 'build/'
    },
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify');

var connect = require('gulp-connect');

gulp.task('connect', function() {
    connect.server({
        root: 'app',
        livereload: true
    });
});

gulp.task('html', function() {
    gulp.src('./app/*.html')
        .pipe(connect.reload());
});

gulp.task('watch', function() {
    gulp.watch(['./app/*.html'], ['html']);
});

gulp.task('default', ['connect', 'watch']);
// var jsFiles = 'app/controllers/*.js',
//     jsDest = 'dist/scripts';
// // console.log(jsFiles);
// gulp.task('scripts', function() {
//     return gulp.src(jsFiles)
//         .pipe(concat('scripts.js'))
//         .pipe(gulp.dest(jsDest))
//         .pipe(rename('scripts.min.js'))
//         .pipe(uglify())
//         .pipe(gulp.dest(jsDest));
// });

// gulp.task('default', function() {
//     return gulp.src('app/views/**/*.html')
//         .pipe(templateCache())
//         .pipe(gulp.dest('public'));
// });
// development mode?