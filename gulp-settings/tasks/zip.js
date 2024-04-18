import zip from "gulp-zip";
import fs from "fs";
import del from "del";
import path from "path";

// export const zip = () => {
//     // del(app.path.rootFolder+'.zip')''
//     if(fs.existsSync(app.path.rootFolder+'.zip')) {
//         fs.unlinkSync(app.path.rootFolder+'.zip');
//     }

//     return app.gulp.src(app.path.buildFolder+'/**/*.*', {})
//     .pipe(app.plugins.plumber(
//         app.plugins.notify.onError({
//             title: "ZIP",
//             message: "Error: <%= error.message %>",
//             // sound: false
//         })
//     ))

//     .pipe(zipPlugin(`${app.path.rootFolder}.zip`))

//     .pipe(app.gulp.app.gulp.dest('./'));
// }

export const zipFiles = (done) => {
	if (fs.existsSync(app.path.rootFolder + ".zip")) {
		// fs.unlinkSync(app.path.rootFolder+'.zip');
		del.sync([`${app.path.buildFolder}/*.zip`]);
	}

	return app.gulp.src(`${app.path.buildFolder}/**/*.*`, {})
		.pipe(
			app.plugins.plumber(
				app.plugins.notify.onError({
					title: "ZIP",
					message: "Error: <%= error.message %>",
				})
			)
		)
		.pipe(zip(`${path.basename(path.resolve())}.zip`))
		.pipe(app.gulp.dest(app.path.buildFolder));
};
