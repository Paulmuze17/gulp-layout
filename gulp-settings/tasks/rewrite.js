import fs from "fs";
import revRewrite from "gulp-rev-rewrite";

export const rewrite = () => {
	const manifest = fs.readFileSync(app.path.rev);
	app.gulp.src(`${app.path.build.css}*.css`)
		.pipe(
			revRewrite({
				manifest,
			})
		)
		.pipe(app.gulp.dest(app.path.build.css));
	return app.gulp.src(`${app.path.build.html}**/*.html`)
		.pipe(
			revRewrite({
				manifest,
			})
		)
		.pipe(app.gulp.dest(app.path.build.html));
};
