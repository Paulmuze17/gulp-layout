
// import the main module
import gulp from "gulp";

//import our path variable
import { path } from "./gulp-settings/config/path.js";
import { plugins } from "./gulp-settings/config/plugins.js";
import fs from "fs";
import del from 'del';

// import tasks
// import { clean } from "./gulp-settings/tasks/clean.js";
import { html, htmlMinify } from "./gulp-settings/tasks/html.js";
import { styles, stylesBackend } from "./gulp-settings/tasks/styles.js";
// import { server } from "./gulp-settings/tasks/server.js";
import { scripts, scriptsBackend } from "./gulp-settings/tasks/scripts.js";
import { resources } from "./gulp-settings/tasks/resources.js";
import { images, webpImages, svgSprites } from "./gulp-settings/tasks/images.js";
// import { otfToTtf, ttfToWoff, fontStyle } from "./gulp-settings/tasks/fonts.js";
import { zipFiles } from "./gulp-settings/tasks/zip.js";
import { cache } from "./gulp-settings/tasks/cache.js";
import { rewrite } from "./gulp-settings/tasks/rewrite.js";
import browserSync from "browser-sync";

// passing values into global var
// In web globalVar is 'window', in Node.js is 'global'
global.app = {
	isProd: false,
    isBuild: process.argv.includes('--build'),
    isDev: !process.argv.includes('--build'),
    path: path,
    gulp: gulp,
    plugins: plugins,
	browserSync: browserSync.create()
};


const clean = (done) => {
    return del([app.path.buildFolder])
}

const toProd = (done) => {
	app.isProd = true;
	done();
};

// watching files
const watchFiles = () => {
	app.browserSync.init({
	  server: {
		baseDir: app.path.buildFolder
	  },
	});

    gulp.watch(path.watch.scss, styles);
    gulp.watch(path.watch.javascriptFiles, scripts);
    gulp.watch(path.watch.javascriptMain, scripts);
    gulp.watch(path.watch.htmlParts, html);
    gulp.watch(path.watch.html, html);
    gulp.watch(path.watch.resources, resources);
    gulp.watch(path.watch.images, images);
    gulp.watch(path.watch.images2, webpImages);
    gulp.watch(path.watch.svg, svgSprites);
}

// new
const dev = app.gulp.series(clean, html, scripts, styles, resources, images, webpImages, svgSprites, watchFiles);
const backend = app.gulp.series(clean, html, scriptsBackend, stylesBackend, resources, images, webpImages, svgSprites)
const build = app.gulp.series(toProd, clean, html, scripts, styles, resources, images, webpImages, svgSprites, htmlMinify);
const doCache = app.gulp.series(cache, rewrite);
const zip = zipFiles;


gulp.task("default", dev);
gulp.task("build", build);
gulp.task("deployZIP", zip);

// export {svgSprites};
export {dev};
export {backend};
export {build};
export {doCache};
export {zip};
