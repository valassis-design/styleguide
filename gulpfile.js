// Gulp 4

var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');
var minifyImg   = require('gulp-imagemin');
var nunjucksRender = require('gulp-nunjucks-render');

var paths = {
	scss: {
		// By using styles/**/*.sass we're telling gulp to check all folders for any sass file
		src: "scss/**/*",
		// Compiled files will end up in whichever folder it's found in (partials are not compiled)
		dest: "css"
	},
	html: {
		src: "*.html"
	},
	njk: {
		src: "pages/**/*",
		watch: ["pages/**/*", "templates/**/*"],
		dest: "./"
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

function nunjucks() {
  return gulp.src(paths.njk.src)
    .pipe(nunjucksRender(paths.njk.src))
    .pipe(gulp.dest(paths.njk.dest))
}
exports.nunjucks = nunjucks;

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
	// you want to build the template files first
	nunjucks();
	// gulp.watch takes in the location of the files to watch for changes
	// and the name of the function we want to run on change
	gulp.watch(paths.scss.src, scss)
  	gulp.watch(paths.html.src, reload)
  	gulp.watch(paths.njk.watch, nunjucks)
}

// Don't forget to expose the task!
exports.server = server;


gulp.task('default', gulp.parallel(server));
