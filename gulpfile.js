// Straight from the user guide
const { src, dest } = require('gulp');

function copyAllLevels() {

    // 'input/**' glob will copy all files and sub-folder contents inside 'input' folder
    // will copy sub-folder contents and also contents of the sub-folders of those sub-folders
    // the output folder will completely be identical to the input folder
    return src('input/**')
        .pipe(dest('output/'))

}

function copyFirstLevel() {

    /**
     * this glob will copy only the first level of 'input' folder
     * it will not copy the contents of the sub folders (second level contents)
     * the output folder will contain index.html, and empty css and js folders
     * 
     * output/
     * |--> css/
     * |--> js/
     * |--> index.html
     * 
     */
    return src('input/*')
        .pipe(dest('output/'))

}

function copyAllLevelsWithFilter() {

    /**
     * this will copy only the js files from all levels within the input folder
     * output structure will be as follows
     * 
     * output/
     * |--> js/
     * |--> |--> main.js
     * |--> |--> lib/
     * |--> |--> |--> angular.js
     */
     
    return src('input/**/*.js')
        .pipe(dest('output/'))

}

function copyAllLevelsWithFilter_2() {

    /**
     * this will copy only the js files from all levels within the input folder
     * this will not copy any files named main.js
     * output structure will be as follows
     * 
     * output/
     * |--> js/
     * |--> |--> lib/
     * |--> |--> |--> angular.js
     */
     
    return src(['input/**/*.js', '!**/main.js'])
        .pipe(dest('output/'))

}

exports.copyAllLevels = copyAllLevels;
exports.copyFirstLevel = copyFirstLevel;
exports.copyAllLevelsWithFilter = copyAllLevelsWithFilter;
exports.copyAllLevelsWithFilter_2 = copyAllLevelsWithFilter_2;
