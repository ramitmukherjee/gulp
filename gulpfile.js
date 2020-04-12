// Straight from the user guide
const { series, parallel } = require('gulp');

function clean(cb) {

    // Call this to signal task end
    cb();
}

function css(cb) {
    
    // Call this to signal task end
    cb();
}

function javascript(cb) {

    // Call this to signal task end
    cb();
}

// first run clean and then run css and javascript in parallel
exports.build = series(clean, parallel(css, javascript));
