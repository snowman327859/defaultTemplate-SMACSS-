var gulp = require("gulp");

var frontnote = require("gulp-frontnote"),
	sass = require("gulp-sass"),
	autoprefixer = require("gulp-autoprefixer"),
	ejs = require("gulp-ejs"),
	notify = require("gulp-notify"),
	csscomb = require("gulp-csscomb"),
	minifyCss = require("gulp-minify-css"),
	uglify = require("gulp-uglify"),
	browser = require("browser-sync"),
	plumber = require("gulp-plumber");


gulp.task("sass", function() {
	gulp.src("sass/**/*scss")
		.pipe(plumber({
			errorHandler: notify.onError('Error: (%= error.message %>')
		}))
		.pipe(frontnote({
			css: '../css/styles.css'
		}))
       	.pipe(sass({style : '#nested'})) //出力形式の種類　#nested, compact, compressed, expanded.
       	.pipe(autoprefixer())
       	.pipe(gulp.dest("./baseTemplate/css"))
       	.pipe(browser.reload({stream:true}))
});

gulp.task("ejs", function() {
	gulp.src(["ejs/*.ejs", "!ejs/*.html"])
		.pipe(plumber({
			errorHandler: notify.onError('Error: (%= error.message %>')
		}))
		.pipe(ejs())
		.pipe(gulp.dest("./baseTemplate"))
		.pipe(browser.reload({stream:true}))
});

gulp.task("js", function() {
	gulp.src(["js/**/*.js","!js/min/**/*.js"])
		.pipe(plumber({
			errorHandler: notify.onError('Error: (%= error.message %>')
		}))
		.pipe(uglify())
		.pipe(gulp.dest("./baseTemplate/js"))
		.pipe(browser.reload({stream:true}))
});


// css change
gulp.task("minify-css", function() {
	return gulp.src('./baseTemplate/css/styles.css')
		.pipe(minifyCss({compatibility: 'ie8'}))
		.pipe(gulp.dest("./css"))
       	.pipe(browser.reload({stream:true}))
});

gulp.task("csscomb", function() {
	return gulp.src('./baseTemplate/css/styles.css')
		.pipe(csscomb())
		.pipe(gulp.dest("./css"))
       	.pipe(browser.reload({stream:true}))
});


//server & watch
gulp.task("server", function() {
	browser ({
		server: {
			baseDir: "./"
		}
	});
});

gulp.task("default",['ejs','server'], function() {
	gulp.watch(["js/**/*.js","!js/min/**/*.js"],["js"]);
	gulp.watch("sass/**/*.scss",["sass"]);
});