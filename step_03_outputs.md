# Step 03 outputs

## Series

### create task in series like this
_(exports.build = series(clean, css, javascript);)_

### output
[08:11:49] Starting 'build'...
[08:11:49] Starting 'clean'...
cleaned ✨
[08:11:49] Finished 'clean' after 2.32 ms
[08:11:49] Starting 'css'...
minify css ⭐
[08:11:49] Finished 'css' after 1.21 ms
[08:11:49] Starting 'javascript'...
minify js ⭕
[08:11:49] Finished 'javascript' after 5.85 ms
[08:11:49] Finished 'build' after 16 ms

## Parallel

### create task in parallel like this
_exports.build = series(clean, parallel(css, javascript));_

### output
[08:19:11] Using gulpfile C:\GIT_HUB_\gulp\gulpfile.js
[08:19:11] Starting 'build'...
[08:19:11] Starting 'clean'...
cleaned ✨
[08:19:11] Finished 'clean' after 1.44 ms
[08:19:11] Starting 'css'...
[08:19:11] Starting 'javascript'...
minify css ⭐ 
minify js ⭕
[08:19:11] Finished 'css' after 2.02 ms
[08:19:11] Finished 'javascript' after 2.21 ms
[08:19:11] Finished 'build' after 7.8 ms
