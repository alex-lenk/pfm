const gulp = require('gulp')
const twig = require('gulp-twig')
const htmlValidator = require('gulp-w3c-html-validator')
const bemValidator = require('gulp-html-bem-validator')
const config = require('../config')

module.exports = function pug2html() {
  return gulp.src('src/pages/*.twig')
      .pipe(twig())

    .pipe(htmlValidator())
    .pipe(bemValidator())
    .pipe(gulp.dest('build'))
}
