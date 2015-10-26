var gulp = require('gulp'),
	rename = require('gulp-rename'),
	browserify = require('gulp-browserify'),
	reactify = require('reactify'),
	browserSync = require('browser-sync').create(),
	sourceMaps = require('gulp-sourcemaps'),
	stylus = require('gulp-stylus'),
	nib = require('nib'),
	mocha = require('gulp-mocha');

//Error Handler
function handleError(err) {
    console.log('------------\n Error:\n-------------', err.message);
    this.emit('end');
}

//Build out JS
gulp.task('scripts', function() {
	
	gulp.src('./src/js/index.js')
		.pipe(browserify({
			insertGlobals: false,
			debug: true
			// ,transform: [reactify]
		}))
		.on('error', handleError)
		.pipe(rename('bundle.js'))
		.pipe(gulp.dest('./dist/js'))
		.pipe(browserSync.stream());
});

//Build out Stylus
gulp.task('styles', function() {
	
	gulp.src('./src/css/index.styl')
	    .pipe(sourceMaps.init())
	    .pipe(stylus({
           compress: true,
           use: nib()
    	}))
	    .pipe(sourceMaps.write())
		.on('error', handleError)
	    .pipe(rename('bundle.css'))
	    .pipe(gulp.dest('./dist/css'))
		.pipe(browserSync.stream());

});

gulp.task('test', function(){

	gulp.src('./test/**/*.js')
		.pipe(mocha({
			reporter: 'list'
		}))
		.on('error', handleError)

});

//load BrowserSync, set watches
gulp.task('serve', function(){

	browserSync.init({
		server: './dist'
	});

	gulp.watch(['./src/js/**/*.js', './src/js/**/*.jsx'], ['scripts', 'test']);
	gulp.watch(['./src/css/**/*.styl'], ['styles']);
	gulp.watch(['./test/**/*.js'], ['test']);
	gulp.watch('./dist/**/*.html').on('change', browserSync.reload);

})


gulp.task('default', ['scripts', 'styles', 'test', 'serve']);

