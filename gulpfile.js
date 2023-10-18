const { src, dest, watch } = require("gulp");

const sass = require("gulp-sass")(require("sass"));
function generateCSS(cb) {
  src("./sass/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(dest("./dest"))
    .pipe(sync.stream());
  cb();
}
exports.css = generateCSS;

function watchFiles(cb) {
  watch("./sass/*.scss", generateCSS);
}
exports.watch = watchFiles;

const sync = require("browser-sync").create();

function browserSync(cb) {
  sync.init({
    server: {
      baseDir: ".",
    },
  });
  watch("./sass/*.scss", generateCSS);
  watch("./*.html").on("change", sync.reload);
}

exports.sync = browserSync;
