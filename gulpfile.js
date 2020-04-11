const gulp = require('gulp');

// Private task coz not added to exports array
function clean(cb) {

    console.log("Cleaning...");
    // call cb() to signal task finish
    cb();

}

// Public task coz its added to the exports array
function build(cb) {
    console.log("Building...");
    // call cb() to signal task finish
    cb();
}

// Public task
exports.build = build;
// First clean then build
exports.default = gulp.series(clean, build);