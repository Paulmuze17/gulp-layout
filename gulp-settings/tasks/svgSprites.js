import svgSprite from "gulp-svg-sprite";
import svgmin from "gulp-svgmin";
import cheerio from "gulp-cheerio";
import { path } from "../config/path.js"; //adds an unique key to avoid hashing in browser, changes apply on rebuild


// export const svgSprites = () => {
	// return app.gulp.src(app.path.src.svgSprites, {})
	// .pipe(app.plugins.plumber(
	//     app.plugins.notify.onError({
	//         title: "SVG SPRITES",
	//         message: "Error: <%= error.message %>",
	//         // sound: false
	//     })
	// ))

	// .pipe(svgSprite({
	//     mode: {
	//         stack: {
	//             sprite: '../icons/icons.svg',
	//         }
	//     }
	// }))

	// .pipe(app.gulp.dest(app.path.build.images));
// };
