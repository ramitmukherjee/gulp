function defaultTask(cb) {
    console.log("default task running.");
    cb();
}

exports.default = defaultTask;
