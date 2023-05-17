const { src, dest } = require("gulp");

const scss = require("gulp-sass")(require("sass"));
const concat = require("gulp-concat");
const uglify = require("gulp-uglify-es").default;

function scripts() {
	return src("app/js/script.js")
}

function styles() {
	return src("app/scss/style.scss")
		.pipe(concat("style.min.css"))
		.pipe(scss({ outputStyle: "compressed" }))
		.pipe(dest("app/css"));
}

exports.styles = styles;
