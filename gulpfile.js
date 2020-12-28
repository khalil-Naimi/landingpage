const {src,dest,watch } = require('gulp');
const compileSass = require('gulp-sass');
const minifyCss = require('gulp-clean-css');
const sourceMaps = require('gulp-sourcemaps')
const concat = require('gulp-concat');


compileSass.compiler = require('node-sass');

const bundleSass = ()=>
{
    return src('./Sass/HomePageScss/GeneralCss.scss')
    .pipe(sourceMaps.init())
    .pipe(compileSass().on('error',compileSass.logError))
    .pipe(minifyCss())
    .pipe(sourceMaps.write())
    .pipe(concat('bundle.css'))
    .pipe(dest('./Style/css'));
};

const Devwatch = ()=>
{
    watch('./Sass/**/*.scss',bundleSass);
};

exports.bundleSass = bundleSass;
exports.Devwatch = Devwatch;