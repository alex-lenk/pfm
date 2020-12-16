const gulp = require('gulp');
const plumber = require('gulp-plumber');
const webpack = require('webpack-stream');
const CircularDependencyPlugin = require('circular-dependency-plugin');
const DuplicatePackageCheckerPlugin = require("duplicate-package-checker-webpack-plugin");
const eslint = require('gulp-eslint');
const rigger = require('gulp-rigger');
const uglify = require('gulp-uglify-es').default;
const rename = require('gulp-rename');

module.exports = function script() {
    return gulp.src('src/js/main.js')
        .pipe(plumber())
        .pipe(rigger())
        .pipe(uglify())
        .pipe(rename({suffix: '.min', prefix: ''}))
        .pipe(gulp.dest('build/js'));
}
