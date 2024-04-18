import webp from "gulp-webp";
import imagemin from "gulp-imagemin";
import svgSprite from "gulp-svg-sprite";
import svgmin from "gulp-svgmin";
import cheerio from "gulp-cheerio";

// export const images = () => {
//     return app.gulp.src(app.path.src.images)
//     .pipe(app.plugins.plumber(
//         app.plugins.notify.onError({
//             title: "IMAGES",
//             message: "Error: <%= error.message %>",
//             // sound: false

//         })
//     ))

//     // CONV. INTO WEBP
//     .pipe(app.plugins.newer(app.path.build.images)) //checking new images
//     .pipe(webp()) //converting into .webp format
//     .pipe(app.gulp.app.gulp.dest(app.path.build.images))

//     // IMAGES
//     .pipe(app.gulp.src(app.path.src.images))
//     .pipe(app.plugins.newer(app.path.build.images))
//     .pipe(imagemin({
//         progressive:true,
//         svgoPlugins: [{ removeViewBox: false }],
//         interlaced: true,
//         optimizationLevel: 3 // 0 to 7 уровень сжатия
//     }))
//     .pipe(app.gulp.app.gulp.dest(app.path.build.images))

//     //SVG
//     .pipe(app.gulp.src(app.path.src.svg))
//     .pipe(app.gulp.app.gulp.dest(app.path.build.images));
// }

export const images = () => {
	return app.gulp.src([app.path.src.images])
		.pipe(
			app.plugins.ifPlugin(
				app.isProd,
				imagemin([
					imagemin.mozjpeg({
						quality: 80,
						progressive: true,
					}),
					imagemin.optipng({
						optimizationLevel: 2,
					}),
				])
			)
		)
		.pipe(app.gulp.dest(app.path.build.images));
};

export const webpImages = () => {
	return app.gulp.src([app.path.src.images2])
		.pipe(webp())
		.pipe(app.gulp.dest(app.path.build.images));
};

export const svgSprites = () => {
	return app.gulp.src(app.path.src.svg)
		.pipe(
			svgmin({
				js2svg: {
					pretty: true,
				},
			})
		)
		.pipe(
			cheerio({
				run: function ($) {
					$("[fill]").removeAttr("fill");
					$("[stroke]").removeAttr("stroke");
					$("[style]").removeAttr("style");
				},
				parserOptions: {
					xmlMode: true,
				},
			})
		)
		.pipe(app.plugins.replace("&gt;", ">"))
		.pipe(
			svgSprite({
				mode: {
					stack: {
						sprite: "../icons/sprite.svg",
						example: true, // создать html с перечнем иконок
					},
				},
			})
		)
		.pipe(app.gulp.dest(app.path.build.svg));
};
