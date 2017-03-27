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

gulp.task('default', function() {
    return gulp.src('app/views/**/*.html')
        .pipe(templateCache())
        .pipe(gulp.dest('public'));
});
// development mode?