const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));

gulp.task("sass", function () {
  return gulp
    .src("../../contents/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("../css"));
});

gulp.task("watch", function () {
  gulp.watch("../../contents/**/*.scss", gulp.series("sass"));
});

gulp.task("default", gulp.series("sass", "watch"));
