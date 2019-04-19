// Gulp 4

var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');

var paths = {
	scss: {
			// By using styles/**/*.sass we're telling gulp to check all folders for any sass file
			src: "scss/**/*",
			// Compiled files will end up in whichever folder it's found in (partials are not compiled)
			dest: "css"
	},
	html: {
			src: "*.html"
	}
	// TODO:
	// Add js watch + build
	// how:
	// Easily add additional paths
	// ,html: {
	//  src: '...',
	//  dest: '...'
	// }
};


// Define tasks after requiring dependencies
function scss() {
	// Where should gulp look for the sass files?
	// My .sass files are stored in the styles folder
	// (If you want to use scss files, simply look for *.scss files instead)
	return (
			gulp.src(paths.scss.src)
					// Use sass with the files found, and log any errors
					.pipe(sass()).on("error", sass.logError)
					// What is the destination for the compiled file?
					.pipe(gulp.dest(paths.scss.dest))
					.pipe(browserSync.stream())
	);
}

// Expose the task by exporting it
// This allows you to run it from the commandline using
// $ gulp scss
exports.scss = scss;

function reload() {
	browserSync.reload();
}

function server(){
	browserSync.init({
		server: {
			baseDir: "./"
		}
	});
	// gulp.watch takes in the location of the files to watch for changes
	// and the name of the function we want to run on change
	gulp.watch(paths.scss.src, scss)
	gulp.watch(paths.html.src, reload)
}

// Don't forget to expose the task!
exports.server = server;


gulp.task('default', gulp.parallel(server));
