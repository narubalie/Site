// Initialize plugins

var gulp        = require('gulp'),
    browserSync = require('browser-sync'),
    imagemin    = require('gulp-imagemin');

// PATH variables

var paths = {
    scripts: {
        src: 'app/js/**/*.js',
        dest: 'build/js/'
    },
    html: {
        src: 'app/**/*.html',
        dest: 'build/'
    },
    styles: {
        src: 'app/css/**/*.css',
        dest: 'build/css/'
    },
    images: {
        src: 'app/img/**/*.{jpg,jpeg,png,svg,gif}',
        dest: 'build/img/'
    }
};

// FUNCTIONS

function scripts() {
    return gulp.src(paths.scripts.src)
        .pipe(gulp.dest(paths.scripts.dest));
}

function html() {
    return gulp.src(paths.html.src, { sourcemaps: true })
        .pipe(gulp.dest(paths.html.dest));
}

function styles() {
    return gulp.src(paths.styles.src)
        .pipe(gulp.dest(paths.styles.dest));
}

function images() {
    return gulp.src(paths.images.src, {since: gulp.lastRun(images)})
        .pipe(imagemin({
            optimizationLevel: 5
        }))
      .pipe(gulp.dest(paths.images.dest));
}

// TASKS

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "build"
        }
    });
});

// WATCH

function watch() {
    gulp.watch(paths.html.src, html).on('change', browserSync.reload);
    gulp.watch(paths.scripts.src, scripts).on('change', browserSync.reload);
    gulp.watch(paths.styles.src, styles).on('change', browserSync.reload);
    gulp.watch(paths.images.src, images).on('change', browserSync.reload);
}

// BUILD

var build = gulp.parallel(scripts, images, html, styles, 'browser-sync', watch);

// EXPORTS

exports.html = html;
exports.styles = styles;
exports.scripts = scripts;
exports.watch = watch;

exports.default = build;