# gulp
Gulp gulp

_reference: https://gulpjs.com/docs/en/getting-started/quick-start_

## step_01
default task

## step_02
public and private task  
series tasks  
ℹ if one task fails in series, the rest of them will also fail

## step_03
parallel tasks  
ℹ If one parallel task fails, other tasks parallel to it are not affected

output is attached as "step_03_outputs.md"

## step04
working with files  
src, dest  
globs and filter

### some nice plugins

gulp-uglify - _Minify files with UglifyJS._  
gulp-clean-css - _Minify css with clean-css_  
gulp-autoprefixer - _Prefix css files_  
gulp-header - _Adds headers to files_  
gulp-plumber - _Prevent pipe breaking caused by errors from gulp plugins_  
gulp-rename - _Rename files_  
gulp-sass - _Sass plugin for Gulp_  

### useful libraries to use with gulp

del - _Delete files and directories using globs_  
browsersync - _Time-saving synchronised browser testing_  
