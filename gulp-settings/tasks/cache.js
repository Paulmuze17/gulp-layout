import rev from "gulp-rev";
import revDel from "gulp-rev-delete-original";

export const cache = () => {

	return app.gulp.src(`${app.path.buildFolder}/**/*.{css,js,svg,png,jpg,jpeg,webp,woff2}`, {
		base: app.path.buildFolder,
	})
		.pipe(rev())
		.pipe(revDel())
		.pipe(app.gulp.dest(app.path.buildFolder))
		.pipe(rev.manifest("rev.json"))
		.pipe(app.gulp.dest(app.path.buildFolder));
};
