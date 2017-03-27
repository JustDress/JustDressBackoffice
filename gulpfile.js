var
// modules
    gulp = require('gulp'),


    templateCache = require('gulp-angular-templatecache'),
    devBuild = (process.env.NODE_ENV !== 'production'),

    // folders
    folder = {
        src: 'app/',
        build: 'build/'
    };

gulp.task('default', function() {
    return gulp.src('app/views/**/*.html')
        .pipe(templateCache())
        .pipe(gulp.dest('public'));
});
// development mode?