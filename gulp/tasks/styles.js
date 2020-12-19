const gulp = require('gulp')
const plumber = require('gulp-plumber')
const sass = require('gulp-sass')
const sourcemaps = require('gulp-sourcemaps')
const shorthand = require('gulp-shorthand')
const autoprefixer = require('gulp-autoprefixer')
const gulpStylelint = require('gulp-stylelint')
const rename = require("gulp-rename")
const mincss = require("gulp-clean-css");

module.exports = function styles() {
    return gulp.src('src/styles/*.scss')
        .pipe(plumber())
        .pipe(gulpStylelint({
            failAfterError: false,
            reporters: [{
                formatter: 'string',
                console: true
            }]
        }))
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(autoprefixer())
        .pipe(mincss({
            compatibility: "*", level: {
                1: {
                    specialComments: 0,
                    removeEmpty: true,
                    removeWhitespace: true
                },
                2: {
                    mergeMedia: true,
                    removeEmpty: true,
                    removeDuplicateFontRules: true,
                    removeDuplicateMediaBlocks: true,
                    removeDuplicateRules: true,
                    removeUnusedAtRules: false
                }
            }
        }))
        .pipe(shorthand())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('build/css'))
}

