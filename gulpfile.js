'use strict'
import gulp from 'gulp'

const {series, watch, src, dest, lastRun} = gulp

import twig from 'gulp-twig'
import autoprefixer from 'gulp-autoprefixer'
import cleanCSS from 'gulp-clean-css'
import gulpUglify from 'gulp-uglify-es'

const uglify = gulpUglify.default

import rigger from 'gulp-rigger'
import browserSync from 'browser-sync'
import svgMin from 'gulp-svgmin'
import svgStore from 'gulp-svgstore'
import basePath from 'path'
import newer from 'gulp-newer'
import rename from 'gulp-rename'
import debug from 'gulp-debug'
import imagemin from 'gulp-imagemin'
import imageminOptiPng from 'imagemin-optipng'
import imageminMozJpeg from 'imagemin-mozjpeg'
import dartSass from 'sass'
import gulpSass from 'gulp-sass'

const sass = gulpSass(dartSass)

const pathFiles = {
  html: {
    src: ['./src/pages/**/*.twig', '!./src/pages/components/*.twig'],
    build: './build',
    watch: './src/pages/**/*.twig'
  },
  css: {
    src: ['./src/styles/**/**/*.scss', '!./src/styles/vendors/**'],
    build: './build/assets/css/',
    watch: './src/styles/**/**/*.scss'
  },
  js: {
    src: ['./src/js/**/!(_)*.js', '!./src/js/vendor/'],
    srcVendor: './src/js/vendor.js',
    build: './build/assets/js/',
    watch: './src/js/**/*.js'
  },
  img: {
    src: './src/img/**/*.+(png|jpg|jpeg|svg)',
    build: './build/assets/img/',
    watch: './src/img/**/*.+(png|jpg|jpeg|svg)'
  },
  fonts: {
    src: './src/fonts/*.*',
    build: './build/assets/fonts/',
    watch: './src/fonts/*.**'
  },
  favicon: {
    src: './src/favicon/*.*',
    build: './build/assets/favicon/',
    watch: './src/favicon/*.**'
  }
}

const HTML = () => {
  return src(pathFiles.html.src)
    .pipe(twig({
      data: {
        title: 'Gulp and Twig',
        benefits: [
          'Fast',
          'Flexible',
          'Secure'
        ]
      }
    }))
    .pipe(dest(pathFiles.html.build))
    .pipe(browserSync.stream())
}

const SCSS = () => {
  return src(pathFiles.css.src)
    //.pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(rename({
      suffix: ".min"
    }))
    .pipe(cleanCSS({
      level: {
        1: {
          specialComments: 0
        }
      }
    }))
    //.pipe(sourcemaps.write('maps'))
    .pipe(dest(pathFiles.css.build))
    .pipe(browserSync.stream())
}

const js = () => {
  return src(pathFiles.js.src, {since: lastRun(HTML)})
    .pipe(rigger())
    .pipe(uglify())
    .pipe(dest(pathFiles.js.build))
    .pipe(browserSync.stream())
}

/*
const jsVendor = () => {
  return src(pathFiles.js.srcVendor)
    .pipe(rigger())
    //.pipe(uglify())
    .pipe(dest(pathFiles.js.build))
    .pipe(browserSync.stream())
}
*/

const images = () => {
  return src(pathFiles.img.src)
    .pipe(newer(pathFiles.img.build))
    .pipe(imagemin([
      imageminOptiPng({
        optimizationLevel: 5
      }),
      imageminMozJpeg({
        progressive: true,
        quality: 85
      })
    ]))
    .pipe(dest(pathFiles.img.build))
    .pipe(debug({
      "title": "Images:"
    }))
    .on("end", browserSync.reload);
}

const fonts = () => {
  return src(pathFiles.fonts.src)
    .pipe(dest(pathFiles.fonts.build))
    .pipe(debug({
      "title": "Fonts:"
    }))
    .pipe(browserSync.stream())
}

const favicon = () => {
  return src(pathFiles.favicon.src)
    .pipe(dest(pathFiles.favicon.build))
    .pipe(debug({
      "title": "Favicon:"
    }))
    .pipe(browserSync.stream())
}

const myServer = () => {
  browserSync.init({
    server: {
      baseDir: pathFiles.html.build
    },
    port: 3014,
    notify: false,
    tunnel: false
  })
  watch(pathFiles.html.watch, {usePolling: true}, HTML);
  watch(pathFiles.css.watch, SCSS);
  watch(pathFiles.js.watch, js);
  //watch(pathFiles.js.watch, jsVendor);
}

const svgSprite = () => {
  return src('./src/img/icons/*.svg')
    .pipe(svgMin(function getOptions(file) {
      let prefix = basePath.basename(
        file.relative,
        basePath.extname(file.relative)
      );
      return {
        plugins: [
          'removeDoctype',
          'removeComments',
          'sortAttrs',
          {
            name: 'cleanupIDs',
            parmas: {
              prefix: prefix + '-',
              minify: true
            }
          }
        ]
      }
    }))
    .pipe(svgStore())
    .pipe(dest(pathFiles.img.build));
}

const defaultGulp = series(HTML, SCSS, js, images, fonts, favicon, myServer);

export {HTML}
export {SCSS}
export {js}
export {images}
export {fonts}
export {favicon}
export {myServer}
export {svgSprite}
//export { jsVendor }

export {defaultGulp}
