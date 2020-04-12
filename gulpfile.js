// Straight from the user guide
const { series, parallel } = require('gulp');

function clean(cb) {

    // Call this to signal task end
    return Promise.resolve("cleaned ✨")
        .then((data) => console.log(data));
}

function css(cb) {
    
    // Call this to signal task end
    return Promise.resolve("minify css ⭐ ")
        .then((data) => console.log(data));
}

function javascript(cb) {

    // Call this to signal task end
    return Promise.resolve("minify js ⭕")
        .then((data) => console.log(data));
}

// first run clean and when clean is finished
// then run both css and javascript in parallel
exports.build = series(clean, parallel(css, javascript));
