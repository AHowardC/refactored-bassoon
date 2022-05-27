const { src, dest, watch, series } = require("gulp");
const babel = require("gulp-babel");
const uglify = require("gulp-uglify");
const rename = require("gulp-rename");

function defaultTask(cb) {
  // place code for your default task here
  cb();
}

function bundleMinifyJs() {
  return src("src/assets/js/*.js")
    .pipe(babel())
    .pipe(uglify())
    .pipe(rename({ extname: ".min.js" }))
    .pipe(dest("src/assets/js/build"));
}

function watchJsChanges() {
  watch("src/assets/js/*.js", series(bundleMinifyJs));
}

exports.default = defaultTask;
exports.bundle_minify_js = bundleMinifyJs;
exports.watch_js_changes = watchJsChanges;
