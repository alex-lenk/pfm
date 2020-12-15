const gulp = require('gulp')
const svgstore = require('gulp-svgstore')
const svgmin = require('gulp-svgmin');
const basePath = require('path');
const rename = require('gulp-rename')

module.exports = function svgSprite() {
    return gulp.src('src/img/icons/*.svg')
        .pipe(svgmin(function (file) {
            let prefix = basePath.basename(file.relative, basePath.extname(file.relative));
            return {
                plugins: [{
                    cleanupIDs: {
                        prefix: prefix + '-',
                        minify: true
                    }
                }]
            }
        }))
        .pipe(svgstore())
        .pipe(rename('sprite.svg'))
        .pipe(gulp.dest('build/img'))
}
