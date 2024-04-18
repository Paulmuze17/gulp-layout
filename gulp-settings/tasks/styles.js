import * as sass from "sass";
import gulpSass from "gulp-sass";
import cleanCss from "gulp-clean-css"; //сжатие css
// import webpCss from "gulp-webpcss"; // conv. webp images (requires 'npm i -D webp-converter@2.2.3')
import autoprefixer from "gulp-autoprefixer"; // crossbrowser vendar prefixers - добавление вендорных префиксов
// import groupCssMediaQueries from "gulp-group-css-media-queries"; // grouping media queries

// const mainSass = gulpSass(sass);
const mainSass = gulpSass(sass);

// export const scss = () => {
//     return app.gulp.src(app.path.src.scss, { sourcemap: app.isDev })
//     .pipe(app.plugins.plumber(
//         app.plugins.notify.onError({
//             title: 'SCSS',
//             message: 'Error: <%= error.message %>',
//             // sound: false
//         })
//     ))
//     .pipe(sass({
//         // outputStyle: app.isBuild ? 'compressed' : 'expanded'
//         // outputStyle: 'compressed'
//     }))
//     .pipe(
//         app.plugins.if(
//             app.isBuild,
//             groupCssMediaQueries()
//         )
//     )
//     .pipe(
//         app.plugins.if(
//             app.isBuild,
//             webpCss(
//             {
//                 webpClass: '.webp',
//                 noWebpClass: '.no-webp'
//             }
//         )
//     ))

//     // .pipe(app.plugins.replace(/@scss\//g, '/assets/css/')) // replacing paths on valid ones
//     .pipe(app.plugins.replace(/@images\//g, `${path.assetsPath}/images/`)) // replacing paths on valid ones

//     .pipe(
//         app.plugins.if(
//             app.isBuild,
//             autoprefixer({
//                 grid: true,
//                 overrideBrowserslist: ['last 3 versions'],
//                 cascade: true
//             })
//         )
//     )

//     // .pipe(app.gulp.app.gulp.dest(app.path.build.css)) //adding not minif.css

//     .pipe(
//         app.plugins.if(
//             app.isBuild,
//             cleanCss()
//         )
//     )
//     .pipe(app.plugins.rename({
//         extname: app.isBuild ? '.min.css' : '.css'
//     }))

//     .pipe(app.gulp.app.gulp.dest(app.path.build.css));
// }

// scss styles

export const styles = () => {
	return app.gulp.src(app.path.src.scss, { sourcemaps: !app.isProd })
		.pipe(
			app.plugins.plumber(
				app.plugins.notify.onError({
					title: "SCSS",
					message: "Error: <%= error.message %>",
				})
			)
		)
		.pipe(mainSass())
		.pipe(
			autoprefixer({
				cascade: false,
				grid: true,
				overrideBrowserslist: ["last 5 versions"],
			})
		)
		.pipe(
			app.plugins.ifPlugin(
				app.isProd,
				cleanCss({
					level: 2,
				})
			)
		)
		.pipe(app.gulp.dest(app.path.build.css, { sourcemaps: "." }))
		.pipe(app.browserSync.stream());
};

// styles backend
export const stylesBackend = () => {
	return app.gulp.src(app.path.src.scss)
		.pipe(
			app.plugins.plumber(
				app.plugins.notify.onError({
					title: "SCSS",
					message: "Error: <%= error.message %>",
				})
			)
		)
		.pipe(mainSass())
		.pipe(
			autoprefixer({
				cascade: false,
				grid: true,
				overrideBrowserslist: ["last 5 versions"],
			})
		)
		.pipe(app.gulp.dest(app.path.build.css))
		.pipe(app.browserSync.stream());
};
